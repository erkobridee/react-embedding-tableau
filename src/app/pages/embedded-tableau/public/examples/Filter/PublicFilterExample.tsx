import * as React from 'react';

import { useDidUpdate } from 'hooks/useDidUpdate';

import {
  FilterChangedEvent,
  FilterUpdateType,
  TableauEmbed,
  TableauEmbedStatus,
  TableauEventType,
  type TOnStatusChangeFn,
  type VizFilter,
} from 'app/components/tableau';
import type { CategoricalFilter } from 'app/components/tableau/models/CategoricalFilter';
import type { TableauViz } from 'app/components/tableau/models/Viz';
import { Select } from 'app/components/ui/Select';
import { PublicTableauInfoFooter } from 'app/pages/embedded-tableau/public/components/PublicTableauInfoFooter';

//----------------------------------------------------------------------------//

interface ISelectOption {
  value: string;
  label: string;
}

const options: ISelectOption[] = [
  { value: '', label: 'All' },
  { value: '2013', label: '2013' },
  { value: '2014', label: '2014' },
];

const PUBLIC_TABLEAU_URL =
  'https://public.tableau.com/views/RegionalSampleWorkbook/College';

const FILTER_NAME = 'Academic Year';

const UiStatus = {
  ACTIVE: 'active',
  DISABLED: 'disabled',
} as const;

type TUiStatusKeys = keyof typeof UiStatus;
type TUiStatus = (typeof UiStatus)[TUiStatusKeys];

const initialTableauEmbedVizFilters: VizFilter[] = [
  {
    field: FILTER_NAME,
    value: '',
  },
];

//----------------------------------------------------------------------------//

export const PublicFilterExample = () => {
  const vizRef = React.useRef<TableauViz | null>(null);
  const [status, setStatus] = React.useState<TUiStatus>(UiStatus.DISABLED);
  const [selectedOption, setSelectedOption] = React.useState(options[0].value);

  const onTableauEmbedStatusChangeHandler: TOnStatusChangeFn = (status) => {
    setStatus(
      status !== TableauEmbedStatus.READY ? UiStatus.DISABLED : UiStatus.ACTIVE
    );
  };

  const onSelectHandler: React.ChangeEventHandler<HTMLSelectElement> = async (
    event
  ) => {
    const selectedOption = event.currentTarget.value;
    setSelectedOption(selectedOption);

    const viz = vizRef.current;
    if (!viz) return;

    const dataStatus = (viz as unknown as HTMLElement).getAttribute(
      'data-status'
    );

    if (dataStatus !== 'ready') return;

    const sheet = viz.workbook?.activeSheet;

    setStatus(UiStatus.DISABLED);
    if (selectedOption) {
      await sheet.applyFilterAsync(
        FILTER_NAME,
        [selectedOption],
        FilterUpdateType.Replace
      );
    } else {
      await sheet.clearFilterAsync(FILTER_NAME);
    }
  };

  const onTableauFilterChangedHandler = async (
    event: CustomEvent<FilterChangedEvent>
  ) => {
    const filter = (await event.detail.getFilterAsync()) as CategoricalFilter;

    const appliedValuesLength = filter?.appliedValues?.length ?? 0;

    if (appliedValuesLength === 0) {
      setSelectedOption('');
    } else {
      setSelectedOption(`${filter.appliedValues[0].value}`);
    }

    setStatus(UiStatus.ACTIVE);
  };

  React.useEffect(() => {
    const viz = vizRef.current;
    if (!viz) return;

    viz.addEventListener(
      TableauEventType.FilterChanged,
      onTableauFilterChangedHandler
    );

    return () => {
      viz.removeEventListener(
        TableauEventType.FilterChanged,
        onTableauFilterChangedHandler
      );
    };
  }, [vizRef]);

  const isDisabled = status === UiStatus.DISABLED;

  return (
    <div className="flex flex-col items-center w-full space-y-3">
      <div className="flex space-x-3 items-center">
        <span className="font-bold">{FILTER_NAME}</span>

        <Select
          className="w-36"
          disabled={isDisabled}
          value={selectedOption}
          onChange={onSelectHandler}
        >
          {options.map(({ value, label }, index) => (
            <option key={index} value={value}>
              {label}
            </option>
          ))}
        </Select>
      </div>

      <div className="flex justify-center h-[600px] min-w-[800px]">
        <TableauEmbed
          ref={vizRef}
          viewUrl={PUBLIC_TABLEAU_URL}
          onStatusChange={onTableauEmbedStatusChangeHandler}
          filters={initialTableauEmbedVizFilters}
        />
      </div>

      <PublicTableauInfoFooter
        tableauUrl={PUBLIC_TABLEAU_URL}
        label="filter"
        url="https://tableau.github.io/embedding-api-v3-samples/filter.html"
        code="https://github.com/tableau/embedding-api-v3-samples/blob/main/filter.html"
      />
    </div>
  );
};

export default PublicFilterExample;
