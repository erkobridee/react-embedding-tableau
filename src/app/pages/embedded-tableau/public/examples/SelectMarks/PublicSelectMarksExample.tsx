import * as React from 'react';

import {
  SelectionUpdateType,
  TableauEmbed,
  TableauEmbedStatus,
  TableauEventType,
  type TOnStatusChangeFn,
  type TSelectionUpdateType,
} from 'app/components/tableau';
import type { MarksSelectedEvent } from 'app/components/tableau/events/MarksSelectedEvent';
import type { SelectionCriteria } from 'app/components/tableau/models/SelectionCriteria';
import type { TableauViz } from 'app/components/tableau/models/Viz';
import type { Worksheet } from 'app/components/tableau/models/Worksheet';
import { Button } from 'app/components/ui/Button';
import { PublicTableauInfoFooter } from 'app/pages/embedded-tableau/public/components/PublicTableauInfoFooter';

//----------------------------------------------------------------------------//

const PUBLIC_TABLEAU_URL =
  'https://public.tableau.com/views/RegionalSampleWorkbook/College';

const UiStatus = {
  ACTIVE: 'active',
  DISABLED: 'disabled',
  PROCESSING: 'processing',
} as const;

type TUiStatusKeys = keyof typeof UiStatus;
type TUiStatus = (typeof UiStatus)[TUiStatusKeys];

const SelectionButton = {
  Engineering: 'engineering',
  Business: 'business',
} as const;

type TSelectionButtonKeys = keyof typeof SelectionButton;
type TSelectionButton = (typeof SelectionButton)[TSelectionButtonKeys];

//----------------------------------------------------------------------------//

export const PublicSelectMarksExample = () => {
  const vizRef = React.useRef<TableauViz | null>(null);
  const [status, setStatus] = React.useState<TUiStatus>(UiStatus.DISABLED);

  const [engineeringSelected, setEngineeringSelect] = React.useState(false);
  const [businessSelected, setBusinessSelect] = React.useState(false);

  const getActiveSheet = () => {
    const viz = vizRef.current;
    if (!viz) return;
    return viz.workbook.activeSheet as Worksheet;
  };

  const processDone = () => {
    setStatus(UiStatus.ACTIVE);
  };

  const onTableauEmbedStatusChangeHandler: TOnStatusChangeFn = (status) => {
    setStatus(
      status !== TableauEmbedStatus.READY ? UiStatus.DISABLED : UiStatus.ACTIVE
    );
  };

  const onTableauEmbedFilterChangeHandler = async (event: CustomEvent) => {
    console.log('onTableauEmbedFilterChangeHandler ', event);
  };

  const onTableauEmbedMarkSelectionChangeHandler = async (
    event: CustomEvent<MarksSelectedEvent>
  ) => {
    processDone();

    const marksCollection = await event.detail.getMarksAsync();

    console.log('onTableauEmbedMarkSelectionChangeHandler ', {
      marksCollection,
    });
  };

  React.useEffect(
    () => {
      const viz = vizRef.current;
      if (!viz) return;

      viz.addEventListener(
        TableauEventType.FilterChanged,
        onTableauEmbedFilterChangeHandler
      );

      viz.addEventListener(
        TableauEventType.MarkSelectionChanged,
        onTableauEmbedMarkSelectionChangeHandler
      );

      return () => {
        viz.removeEventListener(
          TableauEventType.FilterChanged,
          onTableauEmbedFilterChangeHandler
        );

        viz.removeEventListener(
          TableauEventType.MarkSelectionChanged,
          onTableauEmbedMarkSelectionChangeHandler
        );
      };
    },
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    []
  );

  const clearSelectionBtnClickHandler = async () => {
    const sheet = getActiveSheet();
    if (!sheet) return;

    setStatus(UiStatus.PROCESSING);
    await sheet.clearSelectedMarksAsync();

    setEngineeringSelect(false);
    setBusinessSelect(false);
  };

  const selectionBtnClickHandler =
    (clickedButton: TSelectionButton) => async () => {
      const sheet = getActiveSheet();
      if (!sheet) return;

      let selectionCriteria: SelectionCriteria[] = [];
      let selectionUpdateType: TSelectionUpdateType;

      switch (clickedButton) {
        case SelectionButton.Engineering:
          selectionUpdateType = SelectionUpdateType.Replace;
          selectionCriteria = [
            {
              fieldName: 'College',
              value: 'Engineering',
            },
          ];
          setEngineeringSelect(true);
          break;
        case SelectionButton.Business:
          selectionUpdateType = SelectionUpdateType.Add;
          selectionCriteria = [
            {
              fieldName: 'College',
              value: 'Business',
            },
          ];
          setBusinessSelect(true);
          break;
      }

      if (selectionCriteria.length === 0) return;

      setStatus(UiStatus.PROCESSING);
      await sheet.selectMarksByValueAsync(
        selectionCriteria,
        selectionUpdateType
      );
    };

  const isUiDisabled = [
    `${UiStatus.DISABLED}`,
    `${UiStatus.PROCESSING}`,
  ].includes(status);

  return (
    <div className="flex flex-col items-center w-full space-y-3">
      <div className="flex space-x-3 items-center">
        <span>
          <strong>ui status: </strong> {status}
        </span>
      </div>

      <div className="flex space-x-3 items-center">
        <span className="font-bold">College:</span>
        <Button
          disabled={isUiDisabled || engineeringSelected}
          onClick={selectionBtnClickHandler(SelectionButton.Engineering)}
        >
          Select Engineering
        </Button>
        <Button
          disabled={isUiDisabled || !engineeringSelected || businessSelected}
          onClick={selectionBtnClickHandler(SelectionButton.Business)}
        >
          Add Business to Selection
        </Button>
        <Button
          disabled={isUiDisabled || !engineeringSelected}
          onClick={clearSelectionBtnClickHandler}
        >
          Clear Selection
        </Button>
      </div>

      <div className="flex justify-center h-[600px] min-w-[800px]">
        <TableauEmbed
          ref={vizRef}
          viewUrl={PUBLIC_TABLEAU_URL}
          onStatusChange={onTableauEmbedStatusChangeHandler}
        />
      </div>

      <PublicTableauInfoFooter
        tableauUrl={PUBLIC_TABLEAU_URL}
        label="Select Marks"
        url="https://tableau.github.io/embedding-api-v3-samples/selectMarks.html"
        code="https://github.com/tableau/embedding-api-v3-samples/blob/main/selectMarks.html"
      />

      <hr className="border-divider my-4 sm:mx-auto lg:my-6 w-full" />

      <div className="flex space-x-3 items-center">
        <span className="font-bold">Note:</span>
        <span>
          there is no event that informs when the user click on a chart legend
          item
        </span>
      </div>

      <ul>
        <span className="text-lg">Useful events:</span>

        <li className="flex gap-2">
          <span className="font-bold">First Interactive</span>
          <span className="italic">
            Fired when a viz first becomes interactive
          </span>
        </li>

        <li className="flex gap-2">
          <span className="font-bold">Filter Changed</span>
          <span className="italic">
            Raised when any filter has changed state. You can use this event
            type with TableauViz objects.
          </span>
        </li>

        <li className="flex gap-2">
          <span className="font-bold">Mark Selection Changed</span>
          <span className="italic">
            The selected marks on a visualization have changed. You can use this
            event type with TableauViz objects.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default PublicSelectMarksExample;
