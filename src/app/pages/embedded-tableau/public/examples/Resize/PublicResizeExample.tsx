import * as React from 'react';

import {
  TableauEmbed,
  TableauEmbedStatus,
  type TOnStatusChangeFn,
} from 'app/components/tableau';
import type { TableauViz } from 'app/components/tableau/models/Viz';
import { Button } from 'app/components/ui/Button';
import { PublicTableauInfoFooter } from 'app/pages/embedded-tableau/public/components/PublicTableauInfoFooter';

//----------------------------------------------------------------------------//

const PUBLIC_TABLEAU_URL =
  'https://public.tableau.com/views/RegionalSampleWorkbook/Stocks';

const UiStatus = {
  ACTIVE: 'active',
  DISABLED: 'disabled',
} as const;

type TUiStatusKeys = keyof typeof UiStatus;
type TUiStatus = (typeof UiStatus)[TUiStatusKeys];

interface ISize {
  width: number;
  height: number;
}

const WidthLimits = {
  min: 400,
  max: 1200,
};

const HeightLimits = {
  min: 300,
  max: 900,
};

const inputFieldClassName = 'p-2 rounded-md w-20';

//----------------------------------------------------------------------------//

export const PublicResizeExample = () => {
  const vizRef = React.useRef<TableauViz | null>(null);
  const [status, setStatus] = React.useState<TUiStatus>(UiStatus.DISABLED);

  const [applySize, setSize] = React.useState<ISize>({
    width: 900,
    height: 700,
  });

  const [widthValue, setWidthValue] = React.useState(applySize.width);
  const [heightValue, setHeightValue] = React.useState(applySize.height);

  const onTableauEmbedStatusChangeHandler: TOnStatusChangeFn = (status) => {
    setStatus(
      status !== TableauEmbedStatus.READY ? UiStatus.DISABLED : UiStatus.ACTIVE
    );
  };

  const onInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, valueAsNumber } = event.currentTarget;

    switch (name) {
      case 'width':
        setWidthValue(valueAsNumber);
        break;
      case 'height':
        setHeightValue(valueAsNumber);
        break;
    }
  };

  const onInputBlurhandler = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, valueAsNumber } = event.target;
    switch (name) {
      case 'width':
        setWidthValue(
          valueAsNumber < WidthLimits.min
            ? WidthLimits.min
            : valueAsNumber > WidthLimits.max
            ? WidthLimits.max
            : valueAsNumber
        );
        break;
      case 'height':
        setHeightValue(
          valueAsNumber < HeightLimits.min
            ? HeightLimits.min
            : valueAsNumber > HeightLimits.max
            ? HeightLimits.max
            : valueAsNumber
        );
        break;
    }
  };

  const applyBtnClickHandler = (size: ISize) => () => {
    setSize(size);
  };

  const isDisabled = status !== UiStatus.ACTIVE;
  const isApplyDisabled =
    isDisabled ||
    (widthValue === applySize.width && heightValue === applySize.height);

  return (
    <div className="flex flex-col items-center w-full space-y-3">
      <div className="flex gap-3 items-center">
        <span className="font-bold">ui status:</span>
        <span>{status}</span>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex gap-3 items-center">
          <span className="font-bold w-12 text-right">Width</span>
          <input
            type="number"
            name="width"
            value={widthValue}
            onChange={onInputChangeHandler}
            onBlur={onInputBlurhandler}
            className={inputFieldClassName}
            min={WidthLimits.min}
            max={WidthLimits.max}
            step={10}
            disabled={isDisabled}
          ></input>
          <span className="text-sm">Limits</span>
          <span className="text-sm italic">{`min: ${WidthLimits.min} and max: ${WidthLimits.max}`}</span>
        </div>
        <div className="flex gap-3 items-center">
          <span className="font-bold w-12 text-right">Height</span>
          <input
            type="number"
            name="height"
            value={heightValue}
            onChange={onInputChangeHandler}
            onBlur={onInputBlurhandler}
            className={inputFieldClassName}
            min={HeightLimits.min}
            max={HeightLimits.max}
            step={10}
            disabled={isDisabled}
          ></input>
          <span className="text-sm">Limits</span>
          <span className="text-sm italic">{`min: ${HeightLimits.min} and max: ${HeightLimits.max}`}</span>
        </div>

        <div className="flex gap-3 items-center justify-center w-full">
          <span>{`${widthValue} x ${heightValue} px`}</span>

          <Button
            disabled={isApplyDisabled}
            onClick={applyBtnClickHandler({
              width: widthValue,
              height: heightValue,
            })}
          >
            Apply
          </Button>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <TableauEmbed
          ref={vizRef}
          viewUrl={PUBLIC_TABLEAU_URL}
          onStatusChange={onTableauEmbedStatusChangeHandler}
          height={applySize.height}
          width={applySize.width}
        />
      </div>

      <PublicTableauInfoFooter
        tableauUrl={PUBLIC_TABLEAU_URL}
        label="Resize"
        url="https://tableau.github.io/embedding-api-v3-samples/resize.html"
        code="https://github.com/tableau/embedding-api-v3-samples/blob/main/resize.html"
      />
    </div>
  );
};

export default PublicResizeExample;
