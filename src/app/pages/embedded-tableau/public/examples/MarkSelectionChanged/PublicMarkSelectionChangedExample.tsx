import * as React from 'react';

import slugifyFn from 'slugify';

import {
  TableauEmbed,
  TableauEmbedStatus,
  TableauEventType,
  type TOnStatusChangeFn,
} from 'app/components/tableau';
import type { MarksSelectedEvent } from 'app/components/tableau/events/MarksSelectedEvent';
import type { DataTable } from 'app/components/tableau/models/DataTable';
import type { TableauViz } from 'app/components/tableau/models/Viz';
import { PublicTableauInfoFooter } from 'app/pages/embedded-tableau/public/components/PublicTableauInfoFooter';

//----------------------------------------------------------------------------//

const PUBLIC_TABLEAU_URL =
  'https://public.tableau.com/views/RegionalSampleWorkbook/College';

const UiStatus = {
  ACTIVE: 'active',
  DISABLED: 'disabled',
} as const;

type TUiStatusKeys = keyof typeof UiStatus;
type TUiStatus = (typeof UiStatus)[TUiStatusKeys];

//----------------------------------------------------------------------------//

// https://github.com/simov/slugify#options
const slugify = (value: string) =>
  slugifyFn(value, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  });

//----------------------------------------------------------------------------//

interface IParsedColumnItem {
  /** it's a slugify string from the fieldName */
  fieldId: string;
  fieldName: string;
  dataType: string;
}

interface IParsedDataItem<V = string | number> extends IParsedColumnItem {
  value: V;
}

type TParsedMarksDataRow = IParsedDataItem[];
type TParsedMarksData = TParsedMarksDataRow[];

const parseMarksData = (marksData: DataTable): TParsedMarksData => {
  const parsedColumns = marksData.columns.map<IParsedColumnItem>(
    ({ fieldName, dataType }) => ({
      fieldId: slugify(fieldName),
      fieldName,
      dataType,
    })
  );

  const parsedData = marksData.data.map<IParsedDataItem[]>((row) =>
    parsedColumns.map((column, index) => {
      return {
        ...column,
        value: row[index].value,
      };
    })
  );

  return parsedData;
};

//----------------------------------------------------------------------------//

export const MarkSelectionChanged = () => {
  const vizRef = React.useRef<TableauViz | null>(null);
  const [status, setStatus] = React.useState<TUiStatus>(UiStatus.DISABLED);
  const [parsedMarksData, setParsetMarksData] =
    React.useState<TParsedMarksData>([]);

  const onTableauEmbedStatusChangeHandler: TOnStatusChangeFn = (status) => {
    setStatus(
      status !== TableauEmbedStatus.READY ? UiStatus.DISABLED : UiStatus.ACTIVE
    );
  };

  const onTableauEmbedMarkSelectionChangeHandler = async (
    event: CustomEvent<MarksSelectedEvent>
  ) => {
    const detail = event.detail;

    const marksCollection = await detail.getMarksAsync();

    const parsedData = parseMarksData(marksCollection.data[0]);

    setParsetMarksData(parsedData);
  };

  React.useEffect(() => {
    const viz = vizRef.current;
    if (!viz) return;

    viz.addEventListener(
      TableauEventType.MarkSelectionChanged,
      onTableauEmbedMarkSelectionChangeHandler
    );

    return () => {
      viz.removeEventListener(
        TableauEventType.MarkSelectionChanged,
        onTableauEmbedMarkSelectionChangeHandler
      );
    };
  }, []);

  const parsedMarksDataLength = parsedMarksData.length;

  return (
    <div className="flex flex-col items-center w-full space-y-3">
      <div className="flex space-x-3 items-center">
        <span>
          <strong>ui status: </strong> {status}
        </span>
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
        label="Respond to Events"
        url="https://tableau.github.io/embedding-api-v3-samples/respondToEvents.html"
        code="https://github.com/tableau/embedding-api-v3-samples/blob/main/respondToEvents.html"
      />

      {parsedMarksDataLength > 0 ? (
        <>
          <hr className="border-divider my-4 sm:mx-auto lg:my-6 w-full" />
          <div className="flex space-x-3 items-center font-bold">
            Marks Selected ( {parsedMarksDataLength} )
          </div>
          <div className="flex gap-3 items-center flex-wrap">
            {parsedMarksData.map((mark, index) => (
              <div
                key={index}
                className="p-2 flex flex-col space-y-2 border rounded-md"
              >
                {mark.map(({ fieldId, fieldName, value }) => (
                  <div key={fieldId}>
                    <span className="font-bold">{`${fieldName}:`}</span>{' '}
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default MarkSelectionChanged;
