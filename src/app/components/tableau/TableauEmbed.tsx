/*
  https://fettblog.eu/typescript-react-generic-forward-refs/
*/

import * as React from 'react';

import cn from 'clsx';

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
  className?: string;

  id?: string;

  /**
   * Specifies the ID of an existing instance to make a copy (clone) of. This is useful if the user wants to continue analysis of an existing visualization without losing the state of the original. If the ID does not refer to an existing visualization, the cloned version is derived from the original visualization.
   */
  instanceIdToClone?: string;

  token?: string;
  toolbar?: TToolbar;
  debug?: boolean;
  hideTabs?: boolean;

  // TODO: define how to pass a list of VizFilter
}

const TableauEmbedInner = (
  {
    viewUrl,
    embeddingApiVersion = DefaultEmbeddingApiVersion,
    className,
    id = 'tableauViz',
    instanceIdToClone,
    token,
    toolbar,
    debug = false,
    hideTabs = false,
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

  const vizFirstInteractiveHandler = async (event: Event) => {
    const viz = vizRef.current!;
    viz.style = { opacity: 1 };

    // TODO: review
  };

  React.useEffect(() => {
    const viz = vizRef.current;

    // TODO: check how to handle when the token is present

    viz?.addEventListener(
      TableauEventType.FirstInteractive,
      vizFirstInteractiveHandler
    );

    return () => {
      viz?.removeEventListener(
        TableauEventType.FirstInteractive,
        vizFirstInteractiveHandler
      );
    };
  }, [id]);

  return (
    <>
      <tableau-viz
        ref={vizRef}
        {...{
          src: viewUrl,
          class: cn(
            'transition-opacity motion-reduce:transition-none',
            className
          ),
          id,
          instanceIdToClone,
          toolbar,
          'hide-tabs': hideTabs,
        }}
        style={{ opacity: 0 }}
      ></tableau-viz>
    </>
  );
};

export const TableauEmbed = React.forwardRef(TableauEmbedInner);

TableauEmbed.displayName = 'TableauEmbed';

export default TableauEmbed;
