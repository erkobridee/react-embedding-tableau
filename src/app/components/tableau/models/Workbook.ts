import type { CustomView } from './CustomView';
import type { Parameter } from './Parameter';
import type { Sheet } from './Sheet';
import type { SheetInfo } from './SheetInfo';
import type { Worksheet } from './Worksheet';

/**
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/workbook.html
 */
export interface Workbook {
  /** Gets the currently active custom view, or undefined if no custom view is active. */
  activeCustomView?: CustomView;

  /** Gets the currently active sheet (the active tab). */
  activeSheet: Worksheet;

  /** Gets the name of the workbook saved to the server. Note that this is not necessarily the file name. */
  name: string;

  /** Note that this is synchronous, meaning that all of the sheets are expected when loaded.  */
  publishedSheetsInfo: SheetInfo[];

  //---= methods =---//

  /**
   * Activates the sheet, either by name or index, and returns a promise of the sheet that was activated.
   */
  activateSheetAsync(sheetNameOrIndex: string | number): Promise<Worksheet>;

  /**
   * Modifies the given parameter and assigns it a new value. The new value must fall within the domain restrictions defined by `allowableValues`. If the domain restriction is `ParameterValueType.Range`, be sure to check the `allowableValues` before assigning a new value. If the new value is out of range, the updated value will be set to either the `minValue` or the `maxValue` of the allowable range. If a step size is also specified and the new value does not fall on the step intervals, the updated value will be set to the closest, lower step, or closest, earlier date. If the domain restriction is type `ParameterValueType.List`, and there are aliases defined for the list, the aliased value should be passed to the method.
   *
   * @param name - the name of the parameter
   * @param value - The new value to assign to this parameter. Note: For changing Date parameters, UTC Date objects are expected.
   *
   * @returns {Promise<Parameter>} Promise
   *
   * The updated Parameter. The promise is rejected if name or value is invalid. However, if the domain restriction is type AllowableValuesType.Range, and the value is out of the range bounds, the parameter gets set to the minValue or the maxValue of the range (whichever is closer). If the range has a stepSize or dateStepPeriod, the parameter gets set to the closest, lower step, or the closest, earlier date.
   */
  changeParameterValueAsync(
    name: string,
    value: string | number | boolean | Date
  ): Promise<Parameter>;

  /**
   * Gets the collection of CustomView objects associated with the workbook.
   *
   * @returns { Promise<CustomView[]> } Promise
   */
  getCustomViewsAsync: () => Promise<CustomView[]>;

  /**
   * A collection of all the Tableau parameters that are used in this workbook.
   *
   * @returns { Promise<Parameter[]> } Promise
   */
  getParametersAsync: () => Promise<Parameter[]>;

  /**
   * Removes the named custom view.
   *
   * @param { string } customViewName
   *
   * @return { Promise<CustomView> } Promise
   */
  removeCustomViewAsync(customViewName: string): Promise<CustomView>;

  /**
   * Reverts the workbook to its last saved state.
   *
   * @return { Promise<void> } Promise
   */
  revertAllAsync(): Promise<void>;

  /**
   * Saves the current state of the workbook by assigning a custom view name.
   *
   * @param customViewName
   *
   * @return { Promise<CustomView> } Promise
   */
  saveCustomViewAsync(customViewName: string): Promise<CustomView>;

  /**
   * Sets the active custom view as the default. If there is no active custom view, the default view is the original view.
   *
   * @return { Promise<void> } Promise
   */
  setActiveCustomViewAsDefaultAsync(): Promise<void>;

  /**
   * Changes the visualization to show the named saved state.
   * `workbook.showCustomViewAsync("Awesome" ).then(function() { // do something });`
   * To reset a custom view to the original view, pass in a null value for the customViewName parameter.
   * `workbook.showCustomViewAsync().then(function() { // do something })`;
   *
   * @param { string } customViewName
   *
   * @return { Promise<CustomView> } Promise
   */
  showCustomViewAsync(customViewName: string): Promise<CustomView>;
}
