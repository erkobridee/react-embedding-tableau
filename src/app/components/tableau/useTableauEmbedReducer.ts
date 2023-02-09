import * as React from 'react';

//----------------------------------------------------------------------------//

export const TableauEmbedStatus = {
  IDLE: 'idle',
  LOADING: 'loading',
  READY: 'ready',

  /** maximum time to be waited while loading a view url */
  TIMEOUT: 'timeout',

  // ERROR: 'error',
} as const;

export type TTableauEmbedStatusKeys = keyof typeof TableauEmbedStatus;
export type TTableauEmbedStatus =
  (typeof TableauEmbedStatus)[TTableauEmbedStatusKeys];

export type TOnStatusChangeFn = (newStatus: TTableauEmbedStatus) => void;

//----------------------------------------------------------------------------//

const TableauEmbedReducerActionType = {
  SET_VIEW_URL: 'set-view-url',
  SET_STATUS: 'set-status',
} as const;

type TTableauEmbedReducerActionTypeKeys =
  keyof typeof TableauEmbedReducerActionType;
type TTableauEmbedReducerActionTypes =
  (typeof TableauEmbedReducerActionType)[TTableauEmbedReducerActionTypeKeys];

interface ITableauEmbedReducerAction<P = string> {
  type: TTableauEmbedReducerActionTypes;
  payload: P;
}

interface ITableauEmbedReducerState {
  viewUrl: string;
  status: TTableauEmbedStatus;
}

const reducerFn: React.Reducer<
  ITableauEmbedReducerState,
  ITableauEmbedReducerAction
> = (previousState, action) => {
  const { type, payload } = action;

  let status: TTableauEmbedStatus = TableauEmbedStatus.IDLE;

  switch (type) {
    case TableauEmbedReducerActionType.SET_VIEW_URL:
      status = TableauEmbedStatus.LOADING;
      return {
        viewUrl: payload,
        status,
      };
    case TableauEmbedReducerActionType.SET_STATUS:
      status = payload as TTableauEmbedStatus;
      return {
        ...previousState,
        status,
      };
    default:
      return previousState;
  }
};

//----------------------------------------------------------------------------//

const DEFAULT_STATUS_CHANGE_TIMEOUT = 3000;

export interface IUseTableauEmbedReducerOptions {
  /** default value `idle` */
  initialStatus?: TTableauEmbedStatus;
  /** maximum time to be waited while loading a view url, default value 3000ms ( 3s ) */
  statusChangeTimeout?: number;
}

//----------------------------------------------------------------------------//

export const useTableauEmbedReducer = (
  viewUrl: string,
  options: IUseTableauEmbedReducerOptions = {}
) => {
  const {
    initialStatus = TableauEmbedStatus.IDLE,
    statusChangeTimeout = DEFAULT_STATUS_CHANGE_TIMEOUT,
  } = options;

  const [state, dispatch] = React.useReducer(reducerFn, {
    viewUrl,
    status: initialStatus,
  });

  const setStatus = (payload: TTableauEmbedStatus) => {
    dispatch({ type: TableauEmbedReducerActionType.SET_STATUS, payload });
  };

  //---===---//

  const timeoutRef = React.useRef<number | undefined>(undefined);

  const cancelPreviousTimeout = () => {
    const id = timeoutRef.current;
    if (!id) return;
    clearTimeout(id);
  };

  const setStatusTimeout = () => {
    setStatus(TableauEmbedStatus.TIMEOUT);
  };

  const startTimeout = () => {
    cancelPreviousTimeout();
    timeoutRef.current = setTimeout(
      setStatusTimeout,
      statusChangeTimeout
    ) as unknown as number;
  };

  const setViewUrl = (payload: string) => {
    startTimeout();
    dispatch({ type: TableauEmbedReducerActionType.SET_VIEW_URL, payload });
  };

  const setReady = () => {
    cancelPreviousTimeout();
    setStatus(TableauEmbedStatus.READY);
  };

  React.useEffect(
    () => {
      setStatus(TableauEmbedStatus.LOADING);

      const timeoutId = setTimeout(() => {
        setViewUrl(viewUrl);
      }, 150);

      return () => {
        clearInterval(timeoutId);
      };
    },
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    [viewUrl]
  );

  return {
    viewUrl: state.viewUrl,
    status: state.status,
    setReady,
  };
};

//----------------------------------------------------------------------------//

// export default useTableauEmbedReducer;
