/*
  https://fettblog.eu/typescript-react-generic-forward-refs/
*/

import * as React from 'react';

import cn from 'clsx';

import { useDidUpdate } from 'hooks/useDidUpdate';

import type { TableauEmbedBaseProps } from './definitions/TableauEmbedBaseProps';
import { TableauEventType } from './events/TableauEventType';
import type { Viz } from './models/Viz';
import type { VizFilter } from './models/VizFilter';
import { useTableauEmbed } from './TableauEmbedContext';

//----------------------------------------------------------------------------//

export const TableauEmbedStatus = {
  LOADING: 'loading',
  READY: 'ready',
} as const;

//----------------------------------------------------------------------------//

interface TableauEmbedProps extends TableauEmbedBaseProps {
  viewUrl: string;

  className?: string;

  /** default value `tableauViz` */
  id?: string;

  /**
   * Specifies the ID of an existing instance to make a copy (clone) of. This is useful if the user wants to continue analysis of an existing visualization without losing the state of the original. If the ID does not refer to an existing visualization, the cloned version is derived from the original visualization.
   */
  instanceIdToClone?: string;

  /**
   * List of filters to be applied once defining the `<tableau-viz>` element
   *
   * @see — https://help.tableau.com/current/api/embedding_api/en-us/docs/embedding_api_filter.html
   */
  filters?: VizFilter[];
}

const TableauEmbedInner = (
  {
    viewUrl: viewUrlProp,
    className,
    id = 'tableauViz',
    instanceIdToClone,
    token,
    toolbar,
    debug = false,
    hideTabs = false,
    device,
    filters = [],
    loading,
  }: TableauEmbedProps,
  ref: React.Ref<Viz>
) => {
  const [isLoading, setLoading] = React.useState(true);
  const [viewUrl, setViewUrl] = React.useState(viewUrlProp);

  const vizRef = React.useRef<Viz>(null);

  /* link the internal vizRef with the passed external ref  */
  React.useImperativeHandle(ref, () =>
    vizRef.current ? vizRef.current : ({} as Viz)
  );

  const {
    debug: globalDebug,
    token: globalToken,
    device: globalDevice,
    toolbar: globalToolbar,
    hideTabs: globalHideTabs,
    loading: globalLoading,
    baseClassName,
  } = useTableauEmbed();

  const vizFirstInteractiveHandler = async (/*event: Event*/) => {
    const updateVizOpacity = () => {
      setLoading(false);
    };

    // give an extra time to have everything ready before display it
    setTimeout(updateVizOpacity, 300);
  };

  React.useEffect(() => {
    const viz = vizRef.current;

    if (!viz) return;

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
  }, [vizRef.current]);

  useDidUpdate(() => {
    const viz = vizRef.current;

    if (!viz) return;

    setLoading(true);

    setTimeout(() => {
      setViewUrl(viewUrlProp);
    }, 150);
  }, [viewUrlProp]);

  /*
    any-pointer:coarse
    https://css-tricks.com/interaction-media-features-and-their-potential-for-incorrect-assumptions/
   */
  const touchOptimize = !!(
    window.matchMedia && window.matchMedia('(any-pointer:coarse)').matches
  );

  const tableauVizElement = (
    <tableau-viz
      ref={vizRef}
      style={{ opacity: isLoading ? 0 : 1 }}
      {...{
        src: viewUrl,
        class: cn(baseClassName, className),
        id,
        instanceIdToClone,
        device: device || globalDevice,
        toolbar: toolbar || globalToolbar,
        token: token || globalToken,
        debug: debug || globalDebug ? true : undefined,
        'hide-tabs': hideTabs || globalHideTabs ? true : undefined,
        'touch-optimize': touchOptimize ? true : undefined,
      }}
    >
      {filters.map((filter, index) => (
        <viz-filter key={index} {...filter}></viz-filter>
      ))}
    </tableau-viz>
  );

  loading = loading || globalLoading;

  if (!loading) {
    return <>{tableauVizElement}</>;
  }

  return (
    <div style={{ display: 'flex', position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          opacity: isLoading ? 1 : 0,
        }}
      >
        {loading}
      </div>

      {tableauVizElement}
    </div>
  );
};

export const TableauEmbed = React.forwardRef(TableauEmbedInner);

TableauEmbed.displayName = 'TableauEmbed';

export default TableauEmbed;
