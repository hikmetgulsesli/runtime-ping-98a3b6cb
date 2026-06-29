import {
  RUNTIME_PING_FIXTURE_RECORDS,
  type RuntimePingRecord,
} from '../../__fixtures__/runtime-ping.fixture';
import type { RuntimePingPreferences, StorageStatus } from './runtime-ping.store';

const PREFERENCES_KEY = 'runtime-ping:preferences';
const RECORDS_KEY = 'runtime-ping:records';

export interface LoadResult<T> {
  data: T | null;
  status: StorageStatus;
  error: string | null;
}

function isClient(): boolean {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

function parseJson<T>(raw: string | null): LoadResult<T> {
  if (raw === null) {
    return { data: null, status: 'ready', error: null };
  }
  try {
    return { data: JSON.parse(raw) as T, status: 'ready', error: null };
  } catch (err) {
    return {
      data: null,
      status: 'error',
      error: err instanceof Error ? err.message : 'Corrupted persisted data',
    };
  }
}

export function loadPreferences(): LoadResult<RuntimePingPreferences> {
  if (!isClient()) {
    return { data: null, status: 'ready', error: null };
  }
  const raw = localStorage.getItem(PREFERENCES_KEY);
  return parseJson<RuntimePingPreferences>(raw);
}

export function savePreferences(preferences: RuntimePingPreferences): LoadResult<void> {
  if (!isClient()) {
    return { data: null, status: 'ready', error: null };
  }
  try {
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(preferences));
    return { data: null, status: 'ready', error: null };
  } catch (err) {
    return {
      data: null,
      status: 'error',
      error: err instanceof Error ? err.message : 'Failed to save preferences',
    };
  }
}

export function loadRecords(): LoadResult<RuntimePingRecord[]> {
  if (!isClient()) {
    return { data: RUNTIME_PING_FIXTURE_RECORDS, status: 'ready', error: null };
  }
  const raw = localStorage.getItem(RECORDS_KEY);
  const result = parseJson<RuntimePingRecord[]>(raw);
  if (result.status === 'error') {
    return result;
  }
  return {
    data: result.data ?? RUNTIME_PING_FIXTURE_RECORDS,
    status: 'ready',
    error: null,
  };
}

export function saveRecords(records: RuntimePingRecord[]): LoadResult<void> {
  if (!isClient()) {
    return { data: null, status: 'ready', error: null };
  }
  try {
    localStorage.setItem(RECORDS_KEY, JSON.stringify(records));
    return { data: null, status: 'ready', error: null };
  } catch (err) {
    return {
      data: null,
      status: 'error',
      error: err instanceof Error ? err.message : 'Failed to save records',
    };
  }
}

export function clearPersistedData(): void {
  if (!isClient()) return;
  localStorage.removeItem(PREFERENCES_KEY);
  localStorage.removeItem(RECORDS_KEY);
}

export const runtimePingRepo = {
  loadPreferences,
  savePreferences,
  loadRecords,
  saveRecords,
  clearPersistedData,
} as const;
