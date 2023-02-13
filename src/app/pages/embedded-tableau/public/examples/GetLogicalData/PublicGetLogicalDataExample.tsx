import * as React from 'react';

import slugifyFn from 'slugify';

import {
  TableauEmbed,
  TableauEmbedStatus,
  type TOnStatusChangeFn,
} from 'app/components/tableau';
import type { Dashboard } from 'app/components/tableau/models/Dashboard';
import type { DataTable } from 'app/components/tableau/models/DataTable';
import type { DataTableReader } from 'app/components/tableau/models/DataTableReader';
import type { TableauViz } from 'app/components/tableau/models/Viz';
import type { Worksheet } from 'app/components/tableau/models/Worksheet';
import { Button } from 'app/components/ui/Button';
import { DataNavigation } from 'app/components/ui/DataNavigation';
import { InputRangeField } from 'app/components/ui/InputRangeField';
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

const ItemsPerPageLimits = {
  min: 50,
  max: 1000,
};

const defaultItemsPerPage = 50;

const inputFieldClassName = 'w-36';

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

const parseData = (marksData: DataTable): TParsedMarksData => {
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

export const PublicGetLogicalDataExample = () => {
  const sheetRef = React.useRef<Worksheet | undefined>();

  const vizRef = React.useRef<TableauViz | null>(null);
  const [status, setStatus] = React.useState<TUiStatus>(UiStatus.DISABLED);

  const [itemsPerPageValue, setItemsPerPageValue] =
    React.useState(defaultItemsPerPage);
  const [itemsPerPage, setItemsPerPage] = React.useState(defaultItemsPerPage);
  const itemsPerPageValueRef = React.useRef(defaultItemsPerPage);

  //---===---/

  const onTableauEmbedStatusChangeHandler: TOnStatusChangeFn = async (
    status
  ) => {
    const newStatus =
      status !== TableauEmbedStatus.READY ? UiStatus.DISABLED : UiStatus.ACTIVE;
    setStatus(newStatus);

    if (newStatus === UiStatus.ACTIVE) {
      const viz = vizRef.current;
      if (!viz) return;

      const dashboard = viz.workbook.activeSheet as Dashboard;
      const sheet = dashboard.worksheets.find(
        (sheet) => sheet.name === 'Storm Map Sheet'
      );

      sheetRef.current = sheet;
    }
  };

  const onInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { valueAsNumber } = event.currentTarget;
    setItemsPerPageValue(valueAsNumber);
  };

  const onInputBlurhandler = (event: React.FocusEvent<HTMLInputElement>) => {
    const { valueAsNumber } = event.target;

    const newValue =
      valueAsNumber < ItemsPerPageLimits.min
        ? ItemsPerPageLimits.min
        : valueAsNumber > ItemsPerPageLimits.max
        ? ItemsPerPageLimits.max
        : valueAsNumber;

    setItemsPerPageValue(newValue);
    setItemsPerPage(newValue);

    itemsPerPageValueRef.current = newValue;
  };

  //---===---//
  // @begin: pagination code

  const [logicalTableInfo, setLogicalTableInfo] = React.useState({
    caption: '',
    id: '',
  });
  const [currentPage, setCurrentPage] = React.useState(0);
  const [pagesCount, setPagesCount] = React.useState(0);
  const [data, setData] = React.useState<TParsedMarksData>([]);
  const [totalRowsCount, setTotalRowsCount] = React.useState(0);

  const pageReaderRef = React.useRef<DataTableReader>();

  const getPageReader = async () => {
    if (pageReaderRef.current) return pageReaderRef.current;

    const sheet = sheetRef.current;
    if (!sheet) return;

    const datasource = await sheet.getDataSourcesAsync();

    // Get the logical tables from the first data source
    const logicalTables = await datasource[0].getLogicalTablesAsync();

    // Loop through each table that was used in creating this data source
    logicalTables.forEach(function (table) {
      console.log(`Name of logical table: ${table.caption}`);
      console.log(`ID of logical table: ${table.id}`);
    });

    const firstLogicalTable = logicalTables[0];
    const { id, caption } = firstLogicalTable;

    setLogicalTableInfo({ caption, id });

    // Get the data from the first logical table
    const logicalTableData = await datasource[0].getLogicalTableDataAsync(id);
    console.log({ logicalTableData });

    const totalRowsCount = logicalTableData.totalRowCount;

    // There is a maximum of 10,000 rows
    console.log(`Total rows count: ${totalRowsCount}`);

    setTotalRowsCount(totalRowsCount);

    // Create the data table reader
    const pageReader = await datasource[0].getLogicalTableDataReaderAsync(
      id,
      itemsPerPageValueRef.current
    );
    console.log({ pageReader });

    pageReaderRef.current = pageReader;

    const pagesCount = pageReader.pageCount;
    console.log(`Total pages count: ${pagesCount}`);
    setPagesCount(pagesCount);

    return pageReader;
  };

  /**
   * reads data from a given page number
   *
   * @param pageNumber - the page index start at 0
   */
  const readPageData = async (pageNumber = 0) => {
    setStatus(UiStatus.PROCESSING);

    const pageReader = await getPageReader();

    const currentPageDataTable = await pageReader!.getPageAsync(pageNumber);

    const parsedData = parseData(currentPageDataTable);

    setData(parsedData);
    setCurrentPage(pageNumber);

    console.log('readPageData ', { pageNumber, parsedData });

    setTimeout(() => {
      setStatus(UiStatus.ACTIVE);
    }, 100);
  };

  const paginationChangeHandler =
    (currentPage: number) => async (pageNumber: number) => {
      // avoid unnecessary call
      if (currentPage === pageNumber) return;
      await readPageData(pageNumber);

      // TODO: reposition the scroll at the data render area
    };

  // @end: pagination code
  //---===---//

  const clearDataClickHandler = async () => {
    setStatus(UiStatus.PROCESSING);

    // free memory
    await pageReaderRef.current?.releaseAsync();

    setData([]);
    setPagesCount(0);
    setCurrentPage(0);
    pageReaderRef.current = undefined;
    setLogicalTableInfo({ caption: '', id: '' });

    setTimeout(() => {
      setStatus(UiStatus.ACTIVE);
    }, 100);
  };

  const getDataClickHandler = async () => {
    await readPageData();
  };

  //---===---//

  const isDisabled = status !== UiStatus.ACTIVE;
  const isDisabledGetData = isDisabled || data.length > 0;
  const isDisabledClearData = isDisabled || data.length === 0;
  const isLoadingAnotherPage =
    data.length > 0 && status === UiStatus.PROCESSING;

  const displayData = data.length > 0;

  //---===---//

  return (
    <div className="flex flex-col items-center w-full space-y-3">
      <div className="flex gap-3 items-center">
        <span className="font-bold">ui status:</span> <span>{status}</span>
      </div>

      <div className="flex flex-col gap-3 items-center">
        <InputRangeField
          label="Items per page"
          className={inputFieldClassName}
          min={ItemsPerPageLimits.min}
          max={ItemsPerPageLimits.max}
          step={100}
          disabled={isDisabled}
          value={itemsPerPageValue}
          onChange={onInputChangeHandler}
          onBlur={onInputBlurhandler}
        />

        <div className="flex gap-3 items-center">
          <Button disabled={isDisabledGetData} onClick={getDataClickHandler}>
            Get Data
          </Button>
          <Button
            disabled={isDisabledClearData}
            onClick={clearDataClickHandler}
          >
            Clear Data
          </Button>
        </div>
      </div>

      <div className="flex justify-center h-[630px] min-w-[800px]">
        <TableauEmbed
          ref={vizRef}
          viewUrl={PUBLIC_TABLEAU_URL}
          onStatusChange={onTableauEmbedStatusChangeHandler}
        />
      </div>

      <PublicTableauInfoFooter
        tableauUrl={PUBLIC_TABLEAU_URL}
        label="Get Logical Data"
        url="https://tableau.github.io/embedding-api-v3-samples/getDataTableReader.html"
        code="https://github.com/tableau/embedding-api-v3-samples/blob/main/getDataTableReader.html"
      />

      {displayData ? (
        <>
          <hr className="border-divider my-4 sm:mx-auto lg:my-6 w-full" />
          <div className="flex gap-3 items-center">
            <div className="flex gap-1 items-center">
              <span className="font-bold">Logical table:</span>
              <span className="italic">{`id: ${logicalTableInfo.id} | caption: ${logicalTableInfo.caption}`}</span>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <div className="flex gap-1 items-center">
              <span className="font-bold">Items per page:</span>
              <span className="italic">{itemsPerPage}</span>
            </div>

            <div className="flex gap-1 items-center">
              <span className="font-bold">Total items count:</span>
              <span className="italic">{totalRowsCount}</span>
            </div>
          </div>

          <DataNavigation
            page={currentPage}
            pagesCount={pagesCount}
            onPageChange={paginationChangeHandler(currentPage)}
            disabled={isLoadingAnotherPage}
          />

          <div className="flex gap-3 items-center justify-center flex-wrap max-h-[30rem] overflow-auto relative">
            <div className="sticky top-0 left-0 right-0 h-5 w-full bg-gradient-to-b from-[var(--color-bg-app)] to-transparent"></div>
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
            <div className="sticky bottom-0 left-0 right-0 h-5 w-full bg-gradient-to-b from-transparent to-[var(--color-bg-app)]"></div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default PublicGetLogicalDataExample;
