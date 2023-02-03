/*
  https://fettblog.eu/typescript-react-generic-forward-refs/
*/

import * as React from 'react';

import { TableauVizCustomElement } from './definitions';

interface TableauEmbedProps {
  viewUrl: string;
}

const TableauEmbedInner = (
  props: TableauEmbedProps,
  ref: React.Ref<TableauVizCustomElement>
) => {
  const vizRef = React.useRef<TableauVizCustomElement>(null);
  React.useImperativeHandle(ref, async () => vizRef.current);

  // TODO: define the usage of useScript

  // TODO: define the code

  return null;
};

export const TableauEmbed = React.forwardRef(TableauEmbedInner);

TableauEmbed.displayName = 'TableauEmbed';

export default TableauEmbed;
