/*
  based on
  https://usehooks-ts.com/react-hook/use-script

  useful references
  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type
*/
import * as React from 'react';

export const ScriptStatus = {
  IDLE: 'idle',
  LOADING: 'loading',
  READY: 'ready',
  ERROR: 'error',
} as const;

export type TScriptStatusKeys = keyof typeof ScriptStatus;
export type TScriptStatus = (typeof ScriptStatus)[TScriptStatusKeys];

export interface UseScriptOptions {
  shouldPreventLoad?: boolean;
  removeOnUnmount?: boolean;

  asModule?: boolean;

  onReady?: () => void;
  onError?: (event: Event) => void;
  onUnmount?: () => void;
}

//---===---//

// Cached script statuses
const cachedScriptStatuses: Record<string, TScriptStatus | undefined> = {};

//---===---//

const getScriptNode = (src: string) => {
  const node: HTMLScriptElement | null = document.querySelector(
    `script[src="${src}"]`
  );
  const status = node?.getAttribute('data-status') as TScriptStatus | undefined;

  return {
    node,
    status,
  };
};

//---===---//

export const useScript = (
  src: string | null,
  options?: UseScriptOptions
): TScriptStatus => {
  const [status, setStatus] = React.useState<TScriptStatus>(() => {
    if (!src || options?.shouldPreventLoad) {
      return ScriptStatus.IDLE;
    }

    if (typeof window === 'undefined') {
      // SSR Handling - always return 'loading'
      return ScriptStatus.LOADING;
    }

    return cachedScriptStatuses[src] ?? ScriptStatus.LOADING;
  });

  const {
    onReady,
    onError,
    onUnmount,
    shouldPreventLoad,
    removeOnUnmount,
    asModule,
  } = React.useMemo(() => {
    const onReady = () => {
      if (options?.onReady) {
        options.onReady();
      }
    };

    const onError = (event: Event) => {
      if (options?.onError) {
        options.onError(event);
      }
    };

    const onUnmount = () => {
      if (options?.onUnmount) {
        options.onUnmount();
      }
    };

    const shouldPreventLoad = options?.shouldPreventLoad ?? false;
    const removeOnUnmount = options?.removeOnUnmount ?? false;
    const asModule = options?.asModule ?? false;

    return {
      onReady,
      onError,
      onUnmount,
      shouldPreventLoad,
      removeOnUnmount,
      asModule,
    };
  }, [options]);

  React.useEffect(() => {
    if (!src || shouldPreventLoad) {
      return;
    }

    const cachedScriptStatus = cachedScriptStatuses[src];
    if (
      cachedScriptStatus === ScriptStatus.READY ||
      cachedScriptStatus === ScriptStatus.ERROR
    ) {
      // If the script is already cached, set its status immediately
      setStatus(cachedScriptStatus);
      return;
    }

    // Fetch existing script element by src
    // It may have been added by another instance of this hook
    const script = getScriptNode(src);
    let scriptNode = script.node;

    if (!scriptNode) {
      // Create script element and add it to document body
      scriptNode = document.createElement('script');

      if (asModule) {
        scriptNode.type = 'module';
      }

      scriptNode.src = src;
      scriptNode.async = true;
      scriptNode.setAttribute('data-status', 'loading');
      document.body.appendChild(scriptNode);

      // Store status in attribute on script
      // This can be read by other instances of this hook
      const setAttributeFromEvent = (event: Event) => {
        const scriptStatus: TScriptStatus =
          event.type === 'load' ? ScriptStatus.READY : ScriptStatus.ERROR;

        scriptNode?.setAttribute('data-status', scriptStatus);

        switch (scriptStatus) {
          case ScriptStatus.READY:
            onReady();
            break;
          case ScriptStatus.ERROR:
            onError(event);
            break;
        }
      };

      scriptNode.addEventListener('load', setAttributeFromEvent);
      scriptNode.addEventListener('error', setAttributeFromEvent);
    } else {
      // Grab existing script status from attribute and set to state.
      setStatus(script.status ?? cachedScriptStatus ?? ScriptStatus.LOADING);
    }

    // Script event handler to update status in state
    // Note: Even if the script already exists we still need to add
    // event handlers to update the state for *this* hook instance.
    const setStateFromEvent = (event: Event) => {
      const newStatus =
        event.type === 'load' ? ScriptStatus.READY : ScriptStatus.ERROR;
      setStatus(newStatus);
      cachedScriptStatuses[src] = newStatus;

      switch (newStatus) {
        case ScriptStatus.READY:
          onReady();
          break;
        case ScriptStatus.ERROR:
          onError(event);
          break;
      }
    };

    // Add event listeners
    scriptNode.addEventListener('load', setStateFromEvent);
    scriptNode.addEventListener('error', setStateFromEvent);

    // Remove event listeners on cleanup
    return () => {
      if (scriptNode) {
        scriptNode.removeEventListener('load', setStateFromEvent);
        scriptNode.removeEventListener('error', setStateFromEvent);

        if (removeOnUnmount) {
          scriptNode.remove();
        }

        onUnmount();
      }
    };
  }, [
    src,
    onReady,
    onError,
    onUnmount,
    shouldPreventLoad,
    removeOnUnmount,
    asModule,
  ]);

  return status;
};

export default useScript;
