import type { TDeviceType } from '../definitions/DeviceType';
import type { TToolbar } from '../definitions/Toolbar';
import type { Viz } from './Viz';
import type { VizFilter } from './VizFilter';

export interface TableauVizFilterCustomElementAttributes extends VizFilter {
  key?: React.Key | null;
}

/**
 * Maps the attributes of tableau-viz custom element
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/docs/embedding_api_configure.html
 *
 * ---
 *
 * If the size of the content area specified by the HTML element is invalid (for example, `height=0`), the default size of the view is 800 (width) by 600 (height) pixels.
 */
export interface TableauVizCustomElementAttributes {
  ref?: React.Ref<Viz>;
  style?: React.CSSProperties;

  /**
   * Specifies the URL of the view. For security, alway use HTTPS when you specify the URL.
   *
   * Applies to: `<tableau-viz>`, `<tableau-authoring-viz>`
   */
  src: string;

  /**
   * The token used for authorization
   *
   * Applies to: `<tableau-viz>`, `<tableau-authoring-viz>`
   */
  token?: string;

  /**
   * Indicates whether the non-minified version of JavaScript is loaded. If specified (or set to true), the non-minified version is used for both the local component and the Tableau Server visualization (if enabled). If not specified (or set to false), the minified version of the JavaScript files are loaded.
   */
  debug?: boolean;

  /**
   * Indicates whether tabs are hidden or shown.
   *
   * Applies to: `<tableau-viz>`
   */
  ['hide-tabs']?: boolean;

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
  ['instance-id-to-clone']?: string;

  /**
   * Indicates whether to suppress the execution of URL actions. This option does not prevent the URL action event from being raised.
   *
   * Applies to: `<tableau-viz>`
   */
  ['disable-url-actions']?: boolean;

  /**
   * Indicates whether the Close button is shown or hidden. If not specified, defaults to `false` (the button is shown). This property also includes the “File/Close” menu item.
   *
   * Applies to: `<tableau-authoring-viz>
   */
  ['hide-close-button']?: boolean;

  /**
   * Indicates whether the Edit button is shown or hidden. If not specified, defaults to `false` (the button is shown).
   *
   * Applies to: `<tableau-viz>`
   */
  ['hide-edit-button']?: boolean;

  /**
   * Indicates whether the Edit in Desktop button is shown or hidden. If not specified, defaults to `false` (the button is shown).
   *
   * Applies to: `<tableau-viz>`, `<tableau-authoring-viz>
   */
  ['hide-edit-in-desktop-button']?: boolean;

  /**
   * Indicates whether the default edit behavior should be suppressed. If not specified, defaults to `false` (the default edit behavior is preserved). When set to true, this property suppresses what is normally done when the Close button, Edit button, or Edit in Desktop buttons are clicked.
   *
   * Applies to: `<tableau-viz>`, `<tableau-authoring-viz>
   */
  ['suppress-default-edit-behavior']?: boolean;

  /**
   * Indicates whether to touch optimize viz controls.
   *
   * Applies to: `<tableau-viz>`, `<tableau-authoring-viz>
   */
  ['touch-optimize']?: boolean;

  key?: React.Key | null;
  children?: JSX.Element | JSX.Element[];
}

//----------------------------------------------------------------------------//

/*
  How to use Web Components with TypeScript and React | Cory Rylan
  https://coryrylan.com/blog/how-to-use-web-components-with-typescript-and-react
*/

/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace JSX {
    interface IntrinsicElements extends HTMLElement {
      ['tableau-viz']: TableauVizCustomElementAttributes;
      ['viz-filter']: TableauVizFilterCustomElementAttributes;
    }
  }
}
