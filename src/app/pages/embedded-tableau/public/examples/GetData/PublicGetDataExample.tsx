import * as React from 'react';

import slugifyFn from 'slugify';

import {
  TableauEmbed,
  TableauEmbedStatus,
  type TOnStatusChangeFn,
} from 'app/components/tableau';
import type { Dashboard } from 'app/components/tableau/models/Dashboard';
import type { DataTable } from 'app/components/tableau/models/DataTable';
import type { GetUnderlyingDataOptions } from 'app/components/tableau/models/GetUnderlyingDataOptions';
import type { TableauViz } from 'app/components/tableau/models/Viz';
import { Button } from 'app/components/ui/Button';
import { PublicTableauInfoFooter } from 'app/pages/embedded-tableau/public/components/PublicTableauInfoFooter';

//----------------------------------------------------------------------------//

const PUBLIC_TABLEAU_URL =
  'https://public.tableau.com/views/RegionalSampleWorkbook/Storms';

const UiStatus = {
  ACTIVE: 'active',
  DISABLED: 'disabled',
  PROCESSING: 'processing',
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

interface IParsedDataItem<V = string | number | Date>
  extends IParsedColumnItem {
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
        value: row[index].nativeValue,
      };
    })
  );

  return parsedData;
};

//----------------------------------------------------------------------------//

export const PublicGetDataExample = () => {
  const vizRef = React.useRef<TableauViz | null>(null);
  const [status, setStatus] = React.useState<TUiStatus>(UiStatus.DISABLED);

  const [data, setData] = React.useState<TParsedMarksData>([]);

  const onTableauEmbedStatusChangeHandler: TOnStatusChangeFn = (status) => {
    setStatus(
      status !== TableauEmbedStatus.READY ? UiStatus.DISABLED : UiStatus.ACTIVE
    );
  };

  const clearDataClickHandler = () => {
    setData([]);
  };

  const getDataClickHandler = async () => {
    const viz = vizRef.current;
    if (!viz) return;

    const worksheet = viz.workbook.activeSheet;

    if (worksheet.sheetType !== 'dashboard') return;

    const dashboard = worksheet as unknown as Dashboard;

    const sheet = dashboard.worksheets.find(
      (sheet) => sheet.name === 'Storm Map Sheet'
    );

    if (!sheet) return;

    setStatus(UiStatus.PROCESSING);

    const tables = await sheet.getUnderlyingTablesAsync();

    const options: GetUnderlyingDataOptions = {
      maxRows: 10, // Max rows to return. Use 0 to return all rows.
      ignoreAliases: false,
      ignoreSelection: true,
      includeAllColumns: false,
    };
    const underlyingTableData = await sheet.getUnderlyingTableDataAsync(
      tables[0].id,
      options
    );

    const parsedData = parseMarksData(underlyingTableData);

    setData(parsedData);

    setTimeout(() => {
      setStatus(UiStatus.ACTIVE);
    }, 300);
  };

  const isDisabled = status !== UiStatus.ACTIVE;
  const isGetDataDisabled = isDisabled || data.length > 0;
  const isClearDataDisabled = isDisabled || data.length === 0;

  const dataLength = data.length;

  return (
    <div className="flex flex-col items-center w-full space-y-3">
      <div className="flex gap-3 items-center">
        <span className="font-bold">ui status:</span>
        <span>{status}</span>
      </div>

      <div className="flex space-x-3 items-center">
        <Button disabled={isGetDataDisabled} onClick={getDataClickHandler}>
          Get Data
        </Button>

        <Button disabled={isClearDataDisabled} onClick={clearDataClickHandler}>
          Clear Data
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
        label="Get Data"
        url="https://tableau.github.io/embedding-api-v3-samples/getData.html"
        code="https://github.com/tableau/embedding-api-v3-samples/blob/main/getData.html"
      />

      {dataLength > 0 ? (
        <>
          <hr className="border-divider my-4 sm:mx-auto lg:my-6 w-full" />
          <div className="flex space-x-3 items-center font-bold">
            Data Selected ( {dataLength} )
          </div>
          <div className="flex gap-3 items-center flex-wrap">
            {data.map((mark, index) => (
              <div
                key={index}
                className="p-2 flex flex-col space-y-2 border rounded-md"
              >
                {mark.map(({ fieldId, fieldName, value, dataType }) => (
                  <div key={fieldId} className="flex gap-3">
                    <span className="font-bold">{`${fieldName}:`}</span>
                    <span>
                      {dataType === 'date-time'
                        ? `${new Date(`${value}`).toISOString()}`
                        : `${value}`}
                    </span>
                    <span>{`( ${dataType} )`}</span>
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

export default PublicGetDataExample;
