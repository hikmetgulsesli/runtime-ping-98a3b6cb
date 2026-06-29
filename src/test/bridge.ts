import type { RuntimePingAction, RuntimePingState } from '../features/runtime-ping/runtime-ping.store';

export interface RuntimePingAppBridge {
  getState: () => RuntimePingState;
  dispatch: (action: RuntimePingAction) => void;
  version: string;
}

declare global {
  interface Window {
    app?: RuntimePingAppBridge;
  }
}

let currentGetState: (() => RuntimePingState) | null = null;
let currentDispatch: ((action: RuntimePingAction) => void) | null = null;

export function registerRuntimePingAppBridge(
  getState: () => RuntimePingState,
  dispatch: (action: RuntimePingAction) => void,
): void {
  currentGetState = getState;
  currentDispatch = dispatch;

  if (typeof window !== 'undefined') {
    window.app = {
      getState,
      dispatch,
      version: '0.0.0',
    };
  }
}

export function unregisterRuntimePingAppBridge(): void {
  currentGetState = null;
  currentDispatch = null;

  if (typeof window !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (window as any).app;
  }
}

export function getRegisteredBridge(): RuntimePingAppBridge | null {
  if (!currentGetState || !currentDispatch) {
    return null;
  }
  return {
    getState: currentGetState,
    dispatch: currentDispatch,
    version: '0.0.0',
  };
}
