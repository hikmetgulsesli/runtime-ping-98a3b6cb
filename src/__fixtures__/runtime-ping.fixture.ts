export type RuntimePingStage =
  | 'todo'
  | 'in_progress'
  | 'review'
  | 'done'
  | 'archived';

export type RuntimePingStatus =
  | 'pending'
  | 'active'
  | 'done'
  | 'blocked';

export interface RuntimePingRecord {
  id: string;
  title: string;
  description: string;
  url: string;
  stage: RuntimePingStage;
  status: RuntimePingStatus;
  tags: string[];
  owner: string;
  createdAt: string;
  updatedAt: string;
}

export const RUNTIME_PING_FIXTURE_RECORDS: RuntimePingRecord[] = [
  {
    id: 'rp-001',
    title: 'Verify runtime heartbeat',
    description: 'Confirm the app shell emits a ping on every state transition.',
    url: 'https://example.com/runtime-ping/001',
    stage: 'in_progress',
    status: 'active',
    tags: ['runtime', 'telemetry'],
    owner: 'runtime-team',
    createdAt: '2026-06-28T10:00:00.000Z',
    updatedAt: '2026-06-29T14:30:00.000Z',
  },
  {
    id: 'rp-002',
    title: 'Persist navigation panel',
    description: 'Remember the active panel between reloads using local storage.',
    url: 'https://example.com/runtime-ping/002',
    stage: 'review',
    status: 'active',
    tags: ['persistence', 'ux'],
    owner: 'runtime-team',
    createdAt: '2026-06-27T09:00:00.000Z',
    updatedAt: '2026-06-29T13:00:00.000Z',
  },
  {
    id: 'rp-003',
    title: 'Surface storage errors',
    description: 'Show recoverable feedback when persisted data is corrupted.',
    url: 'https://example.com/runtime-ping/003',
    stage: 'todo',
    status: 'pending',
    tags: ['error-handling'],
    owner: 'runtime-team',
    createdAt: '2026-06-29T08:00:00.000Z',
    updatedAt: '2026-06-29T08:00:00.000Z',
  },
  {
    id: 'rp-004',
    title: 'Export insights snapshot',
    description: 'Generate a JSON export of current runtime metrics.',
    url: 'https://example.com/runtime-ping/004',
    stage: 'done',
    status: 'done',
    tags: ['insights', 'export'],
    owner: 'analytics-team',
    createdAt: '2026-06-25T11:00:00.000Z',
    updatedAt: '2026-06-28T16:00:00.000Z',
  },
  {
    id: 'rp-005',
    title: 'Archive stale traces',
    description: 'Move completed traces to the archived stage after 30 days.',
    url: 'https://example.com/runtime-ping/005',
    stage: 'archived',
    status: 'done',
    tags: ['maintenance'],
    owner: 'runtime-team',
    createdAt: '2026-05-20T10:00:00.000Z',
    updatedAt: '2026-06-20T10:00:00.000Z',
  },
];

export function makeEmptyRuntimePingRecord(): RuntimePingRecord {
  const now = new Date().toISOString();
  return {
    id: `rp-${Math.random().toString(36).slice(2, 10)}`,
    title: '',
    description: '',
    url: '',
    stage: 'todo',
    status: 'pending',
    tags: [],
    owner: '',
    createdAt: now,
    updatedAt: now,
  };
}
