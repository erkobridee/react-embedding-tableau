/*
  A Cure for React useState Hell? | builder.io
  https://www.builder.io/blog/use-reducer

  Using the useReducer Hook in React with TypeScript | Craig Holliday - Dev.to
  https://dev.to/craigaholliday/using-the-usereducer-hook-in-react-with-typescript-27m1
*/

import * as React from 'react';

import {
  TableauEmbed,
  TableauEmbedStatus,
  type TOnStatusChangeFn,
} from 'app/components/tableau';
import { Button } from 'app/components/ui/Button';
import { PublicTableauInfoFooter } from 'app/pages/embedded-tableau/public/components/PublicTableauInfoFooter';

const VIZ_LIST = [
  'https://public.tableau.com/views/RegionalSampleWorkbook/Flights',
  'https://public.tableau.com/views/RegionalSampleWorkbook/Obesity',
  'https://public.tableau.com/views/RegionalSampleWorkbook/College',
  'https://public.tableau.com/views/RegionalSampleWorkbook/Stocks',
  'https://public.tableau.com/views/RegionalSampleWorkbook/Storms',
];
const VIZ_LIST_LENGTH = VIZ_LIST.length;
const VIZ_LIST_LAST_INDEX = VIZ_LIST_LENGTH - 1;

interface IVizState {
  vizUrl: string;
  vizIndex: number;
}

const VizAction = {
  PREVIOUS: 'previous',
  NEXT: 'next',
  SET_INDEX: 'set-index',
} as const;
type TVizActionKeys = keyof typeof VizAction;
type TVizAction = (typeof VizAction)[TVizActionKeys];

interface IVizAction {
  type: TVizAction;
  payload?: number;
}

const vizReducer = (state: IVizState, action: IVizAction) => {
  const { type, payload } = action;

  let vizIndex = state.vizIndex;

  switch (type) {
    case VizAction.PREVIOUS:
      vizIndex = vizIndex - 1;
      if (vizIndex < 0) {
        vizIndex = VIZ_LIST_LAST_INDEX;
      }
      break;
    case VizAction.NEXT:
      vizIndex = vizIndex + 1;
      if (vizIndex > VIZ_LIST_LAST_INDEX) {
        vizIndex = 0;
      }
      break;
    case VizAction.SET_INDEX: {
      if (!payload || payload < 0 || payload >= VIZ_LIST_LENGTH) break;

      vizIndex = payload as number;
      break;
    }
  }

  const vizUrl = VIZ_LIST[vizIndex];
  return {
    vizUrl,
    vizIndex,
  };
};

const vizInitialState: IVizState = {
  vizIndex: 0,
  vizUrl: VIZ_LIST[0],
};

export const PublicDynamicLoadExample = () => {
  const [state, dispatch] = React.useReducer(vizReducer, vizInitialState);

  const previousButtonClickHandler = () =>
    dispatch({ type: VizAction.PREVIOUS });

  const nextButtonClickHandler = () => dispatch({ type: VizAction.NEXT });

  // const setVizIndex = (vizIndex?: number) =>
  //   dispatch({ type: VizAction.SET_INDEX, payload: vizIndex });

  const { vizUrl, vizIndex } = state;

  const [buttonsDisabled, setButtonsDisabled] = React.useState(true);
  const onTableauEmbedStatusChangeHandler: TOnStatusChangeFn = (status) => {
    setButtonsDisabled(status !== TableauEmbedStatus.READY);
  };

  return (
    <div className="flex flex-col items-center w-full space-y-3">
      <div className="flex min-w-[800px] min-h-[635px] max-h-[700px]">
        <TableauEmbed
          viewUrl={vizUrl}
          onStatusChange={onTableauEmbedStatusChangeHandler}
        />
      </div>

      <div className="flex space-x-3 items-center">
        <Button onClick={previousButtonClickHandler} disabled={buttonsDisabled}>
          Previsous
        </Button>
        <div>{`${vizIndex + 1} / ${VIZ_LIST_LENGTH}`}</div>
        <Button onClick={nextButtonClickHandler} disabled={buttonsDisabled}>
          Next
        </Button>
      </div>

      <PublicTableauInfoFooter
        tableauUrl={vizUrl}
        label="dynamicLoad"
        url="https://tableau.github.io/embedding-api-v3-samples/dynamicLoad.html"
        code="https://github.com/tableau/embedding-api-v3-samples/blob/main/dynamicLoad.html"
      />
    </div>
  );
};

export default PublicDynamicLoadExample;
