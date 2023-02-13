import * as React from 'react';

import {
  FilterUpdateType,
  TableauEmbed,
  TableauEmbedStatus,
  type TOnStatusChangeFn,
} from 'app/components/tableau';
import type { TableauViz } from 'app/components/tableau/models/Viz';
import type { Worksheet } from 'app/components/tableau/models/Worksheet';
import { Button } from 'app/components/ui/Button';
import { InputRangeField } from 'app/components/ui/InputRangeField';
import { PublicTableauInfoFooter } from 'app/pages/embedded-tableau/public/components/PublicTableauInfoFooter';

//----------------------------------------------------------------------------//

const PUBLIC_TABLEAU_URL =
  'https://public.tableau.com/views/AnimationDashboard_15616567350970/Sheet1';

const UiStatus = {
  ACTIVE: 'active',
  DISABLED: 'disabled',
  PROCESSING: 'processing',
} as const;

type TUiStatusKeys = keyof typeof UiStatus;
type TUiStatus = (typeof UiStatus)[TUiStatusKeys];

// timer defined in miliseconds
const TimerLimits = {
  min: 500,
  max: 5000,
};

const defaultTimer = 1000; // 1s

// inclusive range
const buildNumbersRangeArray = (start = 0, end = 10, step = 1) =>
  Array.from(
    Array.from(Array(Math.ceil((end - start + 1) / step)).keys()),
    (x) => start + x * step
  );

const YEARS_TO_FILTER = buildNumbersRangeArray(1960, 2011);
const YEARS_TO_FILTER_LAST_ITEM = YEARS_TO_FILTER[YEARS_TO_FILTER.length - 1];

const inputFieldClassName = 'w-36';

//----------------------------------------------------------------------------//

export const PublicAnimationExample = () => {
  const sheetRef = React.useRef<Worksheet | undefined>();

  const vizRef = React.useRef<TableauViz | null>(null);
  const [status, setStatus] = React.useState<TUiStatus>(UiStatus.DISABLED);

  const intervalRef = React.useRef<
    string | number | NodeJS.Timeout | undefined
  >();

  const [timerValue, setTimerValue] = React.useState(defaultTimer);
  const [timer, setTimer] = React.useState(defaultTimer);

  const timerValueRef = React.useRef(defaultTimer);

  const getActiveWorksheet = async () => {
    const viz = vizRef.current;
    if (!viz) return;

    if (sheetRef.current) return sheetRef.current;

    const sheet = await viz.workbook.activateSheetAsync('Sheet 1');

    sheetRef.current = sheet;

    return sheet;
  };

  const setYearFilter = async (applyYear?: number, sheet?: Worksheet) => {
    if (!applyYear) return;

    sheet = sheet ?? (await getActiveWorksheet());

    if (!sheet) return;

    await sheet.applyFilterAsync(
      'Year',
      [`${applyYear}`],
      FilterUpdateType.Replace
    );
  };

  const onTableauEmbedStatusChangeHandler: TOnStatusChangeFn = async (
    status
  ) => {
    const newStatus =
      status !== TableauEmbedStatus.READY ? UiStatus.DISABLED : UiStatus.ACTIVE;
    setStatus(newStatus);
  };

  const onInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { valueAsNumber } = event.currentTarget;

    setTimerValue(valueAsNumber);
  };

  const onInputBlurhandler = (event: React.FocusEvent<HTMLInputElement>) => {
    const { valueAsNumber } = event.target;

    const newValue =
      valueAsNumber < TimerLimits.min
        ? TimerLimits.min
        : valueAsNumber > TimerLimits.max
        ? TimerLimits.max
        : valueAsNumber;

    setTimerValue(newValue);
    setTimer(newValue);

    timerValueRef.current = newValue;
  };

  const stopAnimation = () => {
    const intervalId = intervalRef.current;
    if (!intervalId) return;

    clearInterval(intervalId);

    setStatus(UiStatus.ACTIVE);
  };

  const triggerAnimation = async () => {
    setStatus(UiStatus.PROCESSING);

    const sheet = await getActiveWorksheet();

    let selectedYear = YEARS_TO_FILTER[0];

    intervalRef.current = setInterval(async () => {
      await setYearFilter(selectedYear, sheet);

      if (selectedYear === YEARS_TO_FILTER_LAST_ITEM) {
        stopAnimation();
      }

      selectedYear++;
    }, timerValueRef.current);
  };

  const actionButtonClickHandler =
    (isAnimating = false) =>
    () => {
      if (isAnimating) {
        stopAnimation();
        return;
      }

      triggerAnimation();
    };

  const isDisabledTimerField = status !== UiStatus.ACTIVE;
  const isDisabledActionButton = status === UiStatus.DISABLED;
  const isAnimating = status === UiStatus.PROCESSING;

  return (
    <div className="flex flex-col items-center w-full space-y-3">
      <div className="flex gap-3 items-center">
        <span className="font-bold">ui status:</span> <span>{status}</span>
      </div>

      <div className="flex flex-col gap-3 items-center">
        <InputRangeField
          label="Animation Timer"
          name="width"
          value={timerValue}
          onChange={onInputChangeHandler}
          onBlur={onInputBlurhandler}
          className={inputFieldClassName}
          min={TimerLimits.min}
          max={TimerLimits.max}
          step={10}
          disabled={isDisabledTimerField}
        />

        <div className="flex gap-3 items-center">
          <span>{`Timer value in use: ${timer} (ms)`}</span>

          <Button
            disabled={isDisabledActionButton}
            onClick={actionButtonClickHandler(isAnimating)}
          >
            {isAnimating ? 'Stop' : 'Start'}
          </Button>
        </div>
      </div>

      <div className="flex justify-center h-[600px] min-w-[800px]">
        <TableauEmbed
          ref={vizRef}
          viewUrl={PUBLIC_TABLEAU_URL}
          onStatusChange={onTableauEmbedStatusChangeHandler}
          filters={[{ field: 'Year', value: `${YEARS_TO_FILTER[0]}` }]}
        />
      </div>

      <div className="flex gap-3 items-center">
        Years range: 1960 until 2011
      </div>

      <div className="flex gap-3 items-center">
        <div>
          <span className="font-bold">NOTE:</span> <span>This</span>{' '}
          <span className="italic">animation</span>{' '}
          <span>
            runs by incremeting the Year filter on the defined animation timer ({' '}
            {`${timer} ms`} ).
          </span>
        </div>
      </div>

      <PublicTableauInfoFooter
        tableauUrl={PUBLIC_TABLEAU_URL}
        label="Animation"
        githubProfileAccount="andre347"
        githubProfileAccountUrl="https://github.com/andre347"
        githubRepo="tableau-react-jsapi"
        githubRepoUrl="https://github.com/andre347/tableau-react-jsapi"
        url="https://react-tableau-jsapi.vercel.app/animation"
        code="https://github.com/andre347/tableau-react-jsapi/blob/master/src/components/Animation.js"
      />
    </div>
  );
};

export default PublicAnimationExample;
