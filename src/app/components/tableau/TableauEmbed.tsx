/*
  Tableau Embedding API known issues

  Missing TypeScript support #2
  https://github.com/tableau/embedding-api-v3-guide/issues/2

  Get Notification When the Viz failed to load #9 - there is no way to listen for errors
  https://github.com/tableau/embedding-api-v3-guide/issues/9
*/

import * as React from 'react';

import cn from 'clsx';

import { useDidUpdate } from 'hooks/useDidUpdate';

import type { TableauEmbedBaseProps } from './definitions/TableauEmbedBaseProps';
import { TableauEventType } from './events/TableauEventType';
import type { Viz } from './models/Viz';
import type { VizFilter } from './models/VizFilter';
import { useTableauEmbed } from './TableauEmbedContext';
import {
  TableauEmbedStatus,
  TOnStatusChangeFn,
  useTableauEmbedReducer,
} from './useTableauEmbedReducer';

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

  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];

  onStatusChange?: TOnStatusChangeFn;
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
    width,
    height,
    onStatusChange = () => undefined,
  }: TableauEmbedProps,
  ref: React.Ref<Viz>
) => {
  const { viewUrl, status, setReady } = useTableauEmbedReducer(viewUrlProp);

  const isLoading = [
    `${TableauEmbedStatus.IDLE}`,
    `${TableauEmbedStatus.LOADING}`,
  ].includes(status);

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
    // give an extra time to have everything ready before display it
    setTimeout(() => {
      setReady();
    }, 300);
  };

  React.useEffect(
    () => {
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
    },
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    []
  );

  React.useEffect(() => {
    const viz = vizRef.current;

    if (!viz || (!width && !height)) return;

    const vizElShadowRoot = (viz as unknown as any)['shadowRoot'];
    const innerIframe = vizElShadowRoot.children[0];

    const parseValue = (value: string) =>
      /^\d+$/.test(value) ? `${value}px` : value;

    if (width) {
      innerIframe.style.width = parseValue(`${width}`);
    }

    if (height) {
      innerIframe.style.height = parseValue(`${height}`);
    }
  }, [width, height]);

  useDidUpdate(() => {
    onStatusChange(status);
  }, [status]);

  /*
    any-pointer:coarse
    https://css-tricks.com/interaction-media-features-and-their-potential-for-incorrect-assumptions/
   */
  const touchOptimize = !!(
    window &&
    window.matchMedia &&
    window.matchMedia('(any-pointer:coarse)').matches
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
        'data-status': status,
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

/*
  TypeScript + React: Typing Generic forwardRefs
  https://fettblog.eu/typescript-react-generic-forward-refs/
*/
export const TableauEmbed = React.forwardRef(TableauEmbedInner);

TableauEmbed.displayName = 'TableauEmbed';

export default TableauEmbed;

export type { TOnStatusChangeFn } from './useTableauEmbedReducer';
export { TableauEmbedStatus } from './useTableauEmbedReducer';
export type { VizFilter } from './models/VizFilter';
