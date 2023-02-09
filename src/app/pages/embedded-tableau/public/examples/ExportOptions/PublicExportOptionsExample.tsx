import * as React from 'react';

import {
  TableauDialogType,
  TableauEmbed,
  TableauEmbedStatus,
  type TOnStatusChangeFn,
  type TTableauDialogType,
} from 'app/components/tableau';
import type { TableauViz } from 'app/components/tableau/models/Viz';
import { Button } from 'app/components/ui/Button';
import { Select } from 'app/components/ui/Select';
import { SpinIcon } from 'app/components/ui/SpinIcon';
import { PublicTableauInfoFooter } from 'app/pages/embedded-tableau/public/components/PublicTableauInfoFooter';

//----------------------------------------------------------------------------//

const PUBLIC_TABLEAU_URL =
  'https://public.tableau.com/views/RegionalSampleWorkbook/College';

const UiStatus = {
  ACTIVE: 'active',
  DISABLED: 'disabled',
  EXPORTING: 'exporting',
} as const;

type TUiStatusKeys = keyof typeof UiStatus;
type TUiStatus = (typeof UiStatus)[TUiStatusKeys];

interface IExportOption {
  value: string;
  label: string;
}

const exportOptions: IExportOption[] = [
  { value: 'export-image', label: 'Image' },
  { value: TableauDialogType.ExportPDF, label: 'PDF' },
  { value: TableauDialogType.ExportPowerPoint, label: 'PowerPoint' },
  { value: TableauDialogType.ExportCrossTab, label: 'Cross Tab' },
  { value: TableauDialogType.ExportWorkbook, label: 'Workbook' },
  { value: TableauDialogType.ExportData, label: 'Data' },
];

//----------------------------------------------------------------------------//

export const PublicExportOptionsExample = () => {
  const vizRef = React.useRef<TableauViz | null>(null);
  const [status, setStatus] = React.useState<TUiStatus>(UiStatus.DISABLED);
  const [selectedOption, setSelectedOption] = React.useState(
    exportOptions[0].value
  );

  const onTableauEmbedStatusChangeHandler: TOnStatusChangeFn = (status) => {
    setStatus(
      status !== TableauEmbedStatus.READY ? UiStatus.DISABLED : UiStatus.ACTIVE
    );
  };

  const onExportButtonClickHandler = (selectedOption: string) => async () => {
    const viz = vizRef.current;
    if (!viz) return;

    setStatus(UiStatus.EXPORTING);

    if (selectedOption === 'export-image') {
      await viz.exportImageAsync();
    } else {
      /*
        it's missing a way that listen an event that tells when the user finish the dialog interaction
       */
      await viz.displayDialogAsync(selectedOption as TTableauDialogType);
    }

    setTimeout(() => {
      setStatus(UiStatus.ACTIVE);
    }, 1500);
  };

  const isDisabled = [`${UiStatus.DISABLED}`, `${UiStatus.EXPORTING}`].includes(
    status
  );

  const onSelectHandler: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    setSelectedOption(event.currentTarget.value);
  };

  return (
    <div className="flex flex-col items-center w-full space-y-3">
      <div className="flex space-x-3 items-center">
        <Select
          disabled={isDisabled}
          value={selectedOption}
          onChange={onSelectHandler}
        >
          {exportOptions.map(({ value, label }, index) => (
            <option key={index} value={value}>
              {label}
            </option>
          ))}
        </Select>

        <Button
          disabled={isDisabled}
          onClick={onExportButtonClickHandler(selectedOption)}
        >
          {status === UiStatus.EXPORTING ? (
            <>
              <SpinIcon />
              <span>Exporting...</span>
            </>
          ) : (
            'Export'
          )}
        </Button>
      </div>

      <div className="flex justify-center h-[634px] min-w-[800px]">
        <TableauEmbed
          ref={vizRef}
          viewUrl={PUBLIC_TABLEAU_URL}
          onStatusChange={onTableauEmbedStatusChangeHandler}
        />
      </div>

      <PublicTableauInfoFooter tableauUrl={PUBLIC_TABLEAU_URL} />
    </div>
  );
};

export default PublicExportOptionsExample;
