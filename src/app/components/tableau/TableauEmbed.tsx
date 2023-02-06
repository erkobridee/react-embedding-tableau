/*
  https://fettblog.eu/typescript-react-generic-forward-refs/
*/

import * as React from 'react';

import {
  DefaultEmbeddingApiVersion,
  EmbeddingApiVersion,
  TEmbeddingApiVersion,
} from './definitions';
import { TableauViz } from './models';

// TODO: remove
/* eslint-disable @typescript-eslint/no-unused-vars */

interface TableauEmbedProps {
  viewUrl: string;

  embeddingApiVersion?: TEmbeddingApiVersion;

  debug?: boolean;

  id?: string;

  /**
   * Specifies the ID of an existing instance to make a copy (clone) of. This is useful if the user wants to continue analysis of an existing visualization without losing the state of the original. If the ID does not refer to an existing visualization, the cloned version is derived from the original visualization.
   */
  instanceIdToClone?: string;
}

const TableauEmbedInner = (
  {
    viewUrl,
    id = 'tableauViz',
    embeddingApiVersion = DefaultEmbeddingApiVersion,
    debug = false,
  }: TableauEmbedProps,
  ref: React.Ref<TableauViz>
) => {
  const vizRef = React.useRef<TableauViz>(null);

  /* link the internal vizRef with the passed external ref  */
  React.useImperativeHandle(ref, () =>
    vizRef.current ? vizRef.current : ({} as TableauViz)
  );

  const embeddingApiUrl = React.useMemo(() => {
    const url = EmbeddingApiVersion[embeddingApiVersion];
    return debug ? url.replace('min.', '') : url;
  }, [embeddingApiVersion, debug]);

  // TODO: remove
  /*
  (() => {
    const div = document.createElement('div');

    div.addEventListener('click', () => {});

    // vizRef.current?.addEventListener()
  })();
  */

  // TODO: define the usage of useScript

  // TODO: define the code

  return null;
};

export const TableauEmbed = React.forwardRef(TableauEmbedInner);

TableauEmbed.displayName = 'TableauEmbed';

export default TableauEmbed;
