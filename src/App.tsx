import { useEffect } from 'react';
import {
  InsightsRuntimePing,
  PipelineBoardRuntimePing,
  RecordEditorRuntimePing,
  RecordOperationsRuntimePing,
} from './screens';
import { makeEmptyRuntimePingRecord } from './__fixtures__/runtime-ping.fixture';
import {
  RuntimePingProvider,
  useRuntimePingActions,
  useRuntimePingDispatch,
  useRuntimePingState,
} from './features/runtime-ping/runtime-ping.store';
import {
  loadPreferences,
  loadRecords,
  savePreferences,
  saveRecords,
} from './features/runtime-ping/runtime-ping.repo';
import { registerRuntimePingAppBridge, unregisterRuntimePingAppBridge } from './test/bridge';

function AppContent() {
  const state = useRuntimePingState();
  const dispatch = useRuntimePingDispatch();
  const actions = useRuntimePingActions();

  useEffect(() => {
    let cancelled = false;

    async function bootstrap() {
      dispatch({ type: 'BOOTSTRAP_START' });
      const preferencesResult = loadPreferences();
      const recordsResult = loadRecords();

      if (preferencesResult.status === 'error' || recordsResult.status === 'error') {
        dispatch({
          type: 'BOOTSTRAP_FAILURE',
          payload: {
            error: preferencesResult.error ?? recordsResult.error ?? 'Bootstrap failed',
          },
        });
        return;
      }

      if (!cancelled) {
        dispatch({
          type: 'BOOTSTRAP_SUCCESS',
          payload: {
            preferences: preferencesResult.data,
            records: recordsResult.data ?? [],
          },
        });
      }
    }

    bootstrap();

    return () => {
      cancelled = true;
    };
  }, [dispatch]);

  useEffect(() => {
    registerRuntimePingAppBridge(() => state, dispatch);
    return () => {
      unregisterRuntimePingAppBridge();
    };
  }, [state, dispatch]);

  useEffect(() => {
    if (state.storageStatus === 'ready') {
      savePreferences({ activeScreen: state.activeScreen, activePanel: state.activePanel });
      saveRecords(state.records);
    }
  }, [state.activeScreen, state.activePanel, state.records, state.storageStatus]);

  const commonNavigationActions = {
    'operations-1': () => actions.navigate('record-operations'),
    'pipeline-2': () => actions.navigate('pipeline'),
    'insights-3': () => actions.navigate('insights'),
    'documentation-4': () => {},
    'support-5': () => {},
  } as const;

  return (
    <div
      data-setfarm-root="runtime-ping"
      data-testid="setfarm-app-root"
      className="relative flex min-h-screen w-full overflow-hidden bg-slate-50 text-slate-950"
    >
      {state.storageStatus === 'error' && state.lastError && (
        <div
          role="alert"
          className="fixed left-0 right-0 top-0 z-50 border-b border-error bg-error-container/20 p-md text-error"
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-md px-margin-mobile md:px-margin-desktop">
            <span className="font-body-sm">Storage error: {state.lastError}</span>
            <button
              type="button"
              onClick={actions.retryLoad}
              className="rounded-lg bg-primary px-sm py-xs font-body-sm text-on-primary hover:bg-primary/90"
            >
              Retry
            </button>
          </div>
        </div>
      )}

      {state.activeScreen === 'record-operations' && (
        <RecordOperationsRuntimePing
          actions={{
            ...commonNavigationActions,
            'notifications-1': () => {},
            'settings-2': () => actions.setActivePanel(state.activePanel === 'details' ? 'none' : 'details'),
            'act-retry-load-3': actions.retryLoad,
            'act-create-record-4': () => actions.createRecord(makeEmptyRuntimePingRecord()),
            'more-vert-5': () => {},
            'more-vert-6': () => {},
            'more-vert-7': () => {},
            'more-vert-8': () => {},
            'close-9': () => {},
            'edit-10': () => actions.navigate('record-editor'),
            'shell-11': () => {},
          }}
        />
      )}

      {state.activeScreen === 'pipeline' && (
        <PipelineBoardRuntimePing
          actions={{
            ...commonNavigationActions,
            'notifications-1': () => {},
            'settings-2': () => actions.setActivePanel(state.activePanel === 'filters' ? 'none' : 'filters'),
            'filter-3': () => actions.setActivePanel(state.activePanel === 'filters' ? 'none' : 'filters'),
            'new-record-4': () => actions.createRecord(makeEmptyRuntimePingRecord()),
            'more-horiz-5': () => {},
            'more-horiz-6': () => {},
            'more-horiz-7': () => {},
            'more-horiz-8': () => {},
          }}
        />
      )}

      {state.activeScreen === 'insights' && (
        <InsightsRuntimePing
          actions={{
            ...commonNavigationActions,
            'menu-1': () => {},
            'export-2': () => {
              const blob = new Blob([JSON.stringify(state.records, null, 2)], { type: 'application/json' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'runtime-ping-insights.json';
              a.click();
              URL.revokeObjectURL(url);
            },
            'investigate-traces-6': () => actions.navigate('record-operations'),
          }}
        />
      )}

      {state.activeScreen === 'record-editor' && (
        <RecordEditorRuntimePing
          actions={{
            'cancel-1': actions.closeEditor,
            'save-changes-2': () => {
              if (state.selectedRecord) {
                actions.saveRecord({
                  ...state.selectedRecord,
                  updatedAt: new Date().toISOString(),
                });
              }
              actions.closeEditor();
            },
            'close-3': actions.closeEditor,
            'close-4': actions.closeEditor,
            'cancel-5': actions.closeEditor,
            'save-changes-6': () => {
              if (state.selectedRecord) {
                actions.saveRecord({
                  ...state.selectedRecord,
                  updatedAt: new Date().toISOString(),
                });
              }
              actions.closeEditor();
            },
            'back-to-operations-1': () => actions.navigate('record-operations'),
          }}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <RuntimePingProvider>
      <AppContent />
    </RuntimePingProvider>
  );
}
