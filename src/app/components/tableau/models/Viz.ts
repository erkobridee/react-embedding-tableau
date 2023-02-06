import { TDeviceType } from '../definitions/DeviceType';
import { TToolbar } from '../definitions/Toolbar';
import { TableauVizEventMap, TTableauEventType } from '../events';

// TODO: remove
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Embedding API v3 interfaces
 * @see https://help.tableau.com/current/api/embedding_api/en-us/docs/embedding_api_about.html
 *
 *
 * Embedding API Reference - Viz object
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/viz.html
 */
export interface Viz {
  /**
   * Specifies the URL of the view. For security, alway use HTTPS when you specify the URL.
   *
   * Applies to: `<tableau-viz>`, `<tableau-authoring-viz>`
   */
  src: string;

  /**
   * Indicates whether the non-minified version of JavaScript is loaded. If specified (or set to true), the non-minified version is used for both the local component and the Tableau Server visualization (if enabled). If not specified (or set to false), the minified version of the JavaScript files are loaded.
   *
   * Applies to: `<tableau-viz>`, `<tableau-authoring-viz>
   */
  debug?: boolean;

  /**
   * Indicates whether tabs are hidden or shown.
   *
   * Applies to: `<tableau-viz>`
   */
  hideTabs?: boolean;

  /**
   * Indicates the position of the toolbar or if it should be hidden
   *
   * Applies to: `<tableau-viz>`
   */
  toolbar?: TToolbar;

  /**
   * Can be any valid CSS size specifier. If not specified, defaults to the published height of the view.
   *
   * @see
   * https://help.tableau.com/current/api/embedding_api/en-us/docs/embedding_api_configure.html#size-of-the-embedded-view
   *
   * Applies to: `<tableau-viz>`, `<tableau-authoring-viz>
   */
  height?: React.CSSProperties['height'];

  /**
   * Can be any valid CSS size specifier. If not specified, defaults to the published width of the view.
   *
   * @see
   * https://help.tableau.com/current/api/embedding_api/en-us/docs/embedding_api_configure.html#size-of-the-embedded-view
   *
   * Applies to: `<tableau-viz>`, `<tableau-authoring-viz>
   */
  width?: React.CSSProperties['width'];

  /**
   * Specifies a device layout for a dashboard, if it exists. If not specified, defaults to loading a layout based on the smallest dimension of the hosting `iframe` element.
   *
   * Applies to: `<tableau-viz>`
   */
  device?: TDeviceType;

  /**
   * Specifies the ID of an existing instance to make a copy (clone) of. This is useful if the user wants to continue analysis of an existing visualization without losing the state of the original. If the ID does not refer to an existing visualization, the cloned version is derived from the original visualization.
   *
   * Applies to: `<tableau-viz>`
   */
  instanceIdToClone?: string;

  /**
   * Indicates whether to suppress the execution of URL actions. This option does not prevent the URL action event from being raised.
   *
   * Applies to: `<tableau-viz>`
   */
  disableUrlActions?: boolean;

  /**
   * Indicates whether the Close button is shown or hidden. If not specified, defaults to `false` (the button is shown). This property also includes the “File/Close” menu item.
   *
   * Applies to: `<tableau-authoring-viz>
   */
  hideCloseButton?: boolean;

  /**
   * Indicates whether the Edit button is shown or hidden. If not specified, defaults to `false` (the button is shown).
   *
   * Applies to: `<tableau-viz>`
   */
  hideEditButton?: boolean;

  /**
   * Indicates whether the Edit in Desktop button is shown or hidden. If not specified, defaults to `false` (the button is shown).
   *
   * Applies to: `<tableau-viz>`, `<tableau-authoring-viz>
   */
  hideEditInDesktopButton?: boolean;

  /**
   * 	Indicates whether the default edit behavior should be suppressed. If not specified, defaults to `false` (the default edit behavior is preserved). When set to true, this property suppresses what is normally done when the Close button, Edit button, or Edit in Desktop buttons are clicked.
   *
   * Applies to: `<tableau-viz>`, `<tableau-authoring-viz>
   */
  suppressDefaultEditBehavior?: boolean;

  /**
   * Indicates whether automatic updates are currently paused.
   */
  automaticUpdatesArePaused?: boolean;

  //---===---//

  /**
   * Use this method to filter the viz before initialization. If used after initialization, it will re-render the viz. For filtering after initialization, use the other filtering methods, such as `applyFilterAsync`.
   *
   * If you add the same filter fields using the `addFilter()` method and by using the `<viz-filter>` element in the `<tableau-viz>` web component, you might experience unexpected behavior.
   *
   * @param fieldName - the name of the field to filter on.
   * @param value - single value or a list of comma separated values to filter on.
   * @returns void
   */
  addFilter: (fieldName: string, value: string) => void;

  //---===---//

  addEventListener<K extends keyof TableauVizEventMap>(
    type: K,
    listener: (this: Viz, ev: TableauVizEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: TTableauEventType,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;

  removeEventListener<K extends keyof TableauVizEventMap>(
    type: K,
    listener: (this: Viz, ev: TableauVizEventMap[K]) => any,
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener(
    type: TTableauEventType,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;

  //---===---//

  // TODO: define the other attributes
}

export type TableauViz = React.DetailedHTMLProps<
  React.HtmlHTMLAttributes<HTMLElement>,
  HTMLElement
> &
  Viz;

export default TableauViz;
