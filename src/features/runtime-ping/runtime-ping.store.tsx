import { createContext, useCallback, useContext, useMemo, useReducer, type ReactNode } from 'react';
import type { RuntimePingRecord } from '../../__fixtures__/runtime-ping.fixture';

export type RuntimePingScreen =
  | 'record-operations'
  | 'pipeline'
  | 'insights'
  | 'record-editor';

export type RuntimePingPanel = 'none' | 'details' | 'filters';

export type StorageStatus = 'ready' | 'loading' | 'error';

export interface RuntimePingCounts {
  operations: number;
  pipeline: number;
  insights: number;
  records: number;
}

export interface RuntimePingState {
  activeScreen: RuntimePingScreen;
  selectedRecord: RuntimePingRecord | null;
  storageStatus: StorageStatus;
  lastError: string | null;
  activePanel: RuntimePingPanel;
  counts: RuntimePingCounts;
  records: RuntimePingRecord[];
}

export interface RuntimePingPreferences {
  activeScreen: RuntimePingScreen;
  activePanel: RuntimePingPanel;
}

export type RuntimePingAction =
  | { type: 'BOOTSTRAP_START' }
  | { type: 'BOOTSTRAP_SUCCESS'; payload: { preferences: RuntimePingPreferences | null; records: RuntimePingRecord[] } }
  | { type: 'BOOTSTRAP_FAILURE'; payload: { error: string } }
  | { type: 'NAVIGATE'; payload: { screen: RuntimePingScreen } }
  | { type: 'SELECT_RECORD'; payload: { record: RuntimePingRecord | null } }
  | { type: 'SET_ACTIVE_PANEL'; payload: { panel: RuntimePingPanel } }
  | { type: 'SET_COUNTS'; payload: { counts: RuntimePingCounts } }
  | { type: 'SET_STORAGE_STATUS'; payload: { status: StorageStatus; error?: string } }
  | { type: 'RETRY_LOAD' }
  | { type: 'CREATE_RECORD'; payload: { record: RuntimePingRecord } }
  | { type: 'SAVE_RECORD'; payload: { record: RuntimePingRecord } }
  | { type: 'CLOSE_EDITOR' }
  | { type: 'SYNC_RECORDS'; payload: { records: RuntimePingRecord[] } };

export interface RuntimePingStore {
  state: RuntimePingState;
  dispatch: React.Dispatch<RuntimePingAction>;
}

const DEFAULT_SCREEN: RuntimePingScreen = 'record-operations';
const DEFAULT_PANEL: RuntimePingPanel = 'none';

export function getInitialRuntimePingState(): RuntimePingState {
  return {
    activeScreen: DEFAULT_SCREEN,
    selectedRecord: null,
    storageStatus: 'loading',
    lastError: null,
    activePanel: DEFAULT_PANEL,
    counts: {
      operations: 0,
      pipeline: 0,
      insights: 0,
      records: 0,
    },
    records: [],
  };
}

function deriveCounts(records: RuntimePingRecord[]): RuntimePingCounts {
  return {
    operations: records.filter((r) => r.stage !== 'archived').length,
    pipeline: records.filter((r) => r.stage === 'in_progress' || r.stage === 'review').length,
    insights: records.filter((r) => r.status === 'done').length,
    records: records.length,
  };
}

export function runtimePingReducer(
  state: RuntimePingState,
  action: RuntimePingAction,
): RuntimePingState {
  switch (action.type) {
    case 'BOOTSTRAP_START':
      return {
        ...state,
        storageStatus: 'loading',
        lastError: null,
      };
    case 'BOOTSTRAP_SUCCESS': {
      const records = action.payload.records;
      return {
        ...state,
        activeScreen: action.payload.preferences?.activeScreen ?? DEFAULT_SCREEN,
        activePanel: action.payload.preferences?.activePanel ?? DEFAULT_PANEL,
        records,
        counts: deriveCounts(records),
        storageStatus: 'ready',
        lastError: null,
      };
    }
    case 'BOOTSTRAP_FAILURE':
      return {
        ...state,
        storageStatus: 'error',
        lastError: action.payload.error,
      };
    case 'NAVIGATE':
      return {
        ...state,
        activeScreen: action.payload.screen,
      };
    case 'SELECT_RECORD':
      return {
        ...state,
        selectedRecord: action.payload.record,
      };
    case 'SET_ACTIVE_PANEL':
      return {
        ...state,
        activePanel: action.payload.panel,
      };
    case 'SET_COUNTS':
      return {
        ...state,
        counts: action.payload.counts,
      };
    case 'SET_STORAGE_STATUS':
      return {
        ...state,
        storageStatus: action.payload.status,
        lastError: action.payload.error ?? state.lastError,
      };
    case 'RETRY_LOAD':
      return {
        ...state,
        storageStatus: 'loading',
        lastError: null,
      };
    case 'CREATE_RECORD': {
      const records = [action.payload.record, ...state.records];
      return {
        ...state,
        records,
        counts: deriveCounts(records),
        selectedRecord: action.payload.record,
        activeScreen: 'record-editor',
      };
    }
    case 'SAVE_RECORD': {
      const updated = action.payload.record;
      const records = state.records.map((r) => (r.id === updated.id ? updated : r));
      return {
        ...state,
        records,
        counts: deriveCounts(records),
        selectedRecord: updated,
      };
    }
    case 'CLOSE_EDITOR':
      return {
        ...state,
        activeScreen: 'record-operations',
        selectedRecord: null,
      };
    case 'SYNC_RECORDS': {
      const records = action.payload.records;
      return {
        ...state,
        records,
        counts: deriveCounts(records),
      };
    }
    default:
      return state;
  }
}

const RuntimePingContext = createContext<RuntimePingStore | null>(null);

export interface RuntimePingProviderProps {
  children: ReactNode;
  initialState?: Partial<RuntimePingState>;
}

export function RuntimePingProvider({ children, initialState }: RuntimePingProviderProps) {
  const [state, dispatch] = useReducer(
    runtimePingReducer,
    { ...getInitialRuntimePingState(), ...initialState },
  );

  const value = useMemo<RuntimePingStore>(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <RuntimePingContext.Provider value={value}>
      {children}
    </RuntimePingContext.Provider>
  );
}

export function useRuntimePingStore(): RuntimePingStore {
  const context = useContext(RuntimePingContext);
  if (!context) {
    throw new Error('useRuntimePingStore must be used within a RuntimePingProvider');
  }
  return context;
}

export function useRuntimePingState(): RuntimePingState {
  return useRuntimePingStore().state;
}

export function useRuntimePingDispatch(): React.Dispatch<RuntimePingAction> {
  return useRuntimePingStore().dispatch;
}

export function useRuntimePingActions() {
  const { dispatch } = useRuntimePingStore();

  const navigate = useCallback((screen: RuntimePingScreen) => {
    dispatch({ type: 'NAVIGATE', payload: { screen } });
  }, [dispatch]);

  const selectRecord = useCallback((record: RuntimePingRecord | null) => {
    dispatch({ type: 'SELECT_RECORD', payload: { record } });
  }, [dispatch]);

  const setActivePanel = useCallback((panel: RuntimePingPanel) => {
    dispatch({ type: 'SET_ACTIVE_PANEL', payload: { panel } });
  }, [dispatch]);

  const retryLoad = useCallback(() => {
    dispatch({ type: 'RETRY_LOAD' });
  }, [dispatch]);

  const createRecord = useCallback((record: RuntimePingRecord) => {
    dispatch({ type: 'CREATE_RECORD', payload: { record } });
  }, [dispatch]);

  const saveRecord = useCallback((record: RuntimePingRecord) => {
    dispatch({ type: 'SAVE_RECORD', payload: { record } });
  }, [dispatch]);

  const closeEditor = useCallback(() => {
    dispatch({ type: 'CLOSE_EDITOR' });
  }, [dispatch]);

  return {
    navigate,
    selectRecord,
    setActivePanel,
    retryLoad,
    createRecord,
    saveRecord,
    closeEditor,
  };
}
