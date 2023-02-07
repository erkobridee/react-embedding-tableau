/*
  https://fettblog.eu/typescript-react-generic-forward-refs/
*/

import * as React from 'react';

import { useScript } from 'hooks/useScript';

import {
  DefaultEmbeddingApiVersion,
  EmbeddingApiVersion,
  TEmbeddingApiVersion,
} from './definitions/EmbeddingApiVersion';
import type { TToolbar } from './definitions/Toolbar';
import { TableauEventType } from './events/TableauEventType';
import { Viz } from './models/Viz';

// TODO: remove
/* eslint-disable @typescript-eslint/no-unused-vars */

interface TableauEmbedProps {
  viewUrl: string;

  embeddingApiVersion?: TEmbeddingApiVersion;

  id?: string;

  /**
   * Specifies the ID of an existing instance to make a copy (clone) of. This is useful if the user wants to continue analysis of an existing visualization without losing the state of the original. If the ID does not refer to an existing visualization, the cloned version is derived from the original visualization.
   */
  instanceIdToClone?: string;

  debug?: boolean;
  token?: string;
  hideTabs?: boolean;
  toolbar?: TToolbar;
}

const TableauEmbedInner = (
  {
    viewUrl,
    id = 'tableauViz',
    embeddingApiVersion = DefaultEmbeddingApiVersion,
    debug = false,
  }: TableauEmbedProps,
  ref: React.Ref<Viz>
) => {
  const vizRef = React.useRef<Viz>(null);

  /* link the internal vizRef with the passed external ref  */
  React.useImperativeHandle(ref, () =>
    vizRef.current ? vizRef.current : ({} as Viz)
  );

  const embeddingApiUrl = React.useMemo(() => {
    const url = EmbeddingApiVersion[embeddingApiVersion];
    return debug ? url.replace('min.', '') : url;
  }, [embeddingApiVersion, debug]);

  const scriptStatus = useScript(embeddingApiUrl, {
    asModule: true,
  });

  console.log({ viewUrl, id, embeddingApiUrl, scriptStatus, vizRef });

  console.log('workbook', vizRef.current?.workbook);

  React.useEffect(() => {
    const viz = document.getElementById(id) as Viz | null;

    const firstInteractive = async (event: Event) => console.log(event);

    viz?.addEventListener(TableauEventType.FirstInteractive, firstInteractive);

    return () => {
      viz?.removeEventListener(
        TableauEventType.FirstInteractive,
        firstInteractive
      );
    };
  }, [id]);

  /* eslint-disable @typescript-eslint/no-explicit-any */
  return (
    <div>
      <tableau-viz ref={vizRef as any} {...{ src: viewUrl, id }}></tableau-viz>
    </div>
  );
};

export const TableauEmbed = React.forwardRef(TableauEmbedInner);

TableauEmbed.displayName = 'TableauEmbed';

export default TableauEmbed;
