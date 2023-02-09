import * as React from 'react';

import {
  TableauEmbed,
  TableauEmbedStatus,
  // TableauEventType,
  type TOnStatusChangeFn,
} from 'app/components/tableau';
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

export const PublicSelectMarksExample = () => {
  const vizRef = React.useRef<TableauViz | null>(null);
  const [status, setStatus] = React.useState<TUiStatus>(UiStatus.DISABLED);

  // TODO: define the code logic

  const onTableauEmbedStatusChangeHandler: TOnStatusChangeFn = (status) => {
    setStatus(
      status !== TableauEmbedStatus.READY ? UiStatus.DISABLED : UiStatus.ACTIVE
    );
  };

  return (
    <div className="flex flex-col items-center w-full space-y-3">
      <div className="flex space-x-3 items-center">
        <span>
          <strong>TODO:</strong> implement the example
        </span>
      </div>
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
        label="Select Marks"
        url="https://tableau.github.io/embedding-api-v3-samples/selectMarks.html"
        code="https://github.com/tableau/embedding-api-v3-samples/blob/main/selectMarks.html"
      />
    </div>
  );
};

export default PublicSelectMarksExample;
