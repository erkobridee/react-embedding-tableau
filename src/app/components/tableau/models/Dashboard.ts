import type { TFilterUpdateType } from '../definitions/FilterUpdateType';
import type { DashboardObject } from './DashboardObject';
import type { Filter } from './Filter';
import type { FilterOptions } from './FilterOptions';
import type { Sheet } from './Sheet';
import type { StoryPoint } from './StoryPoint';
import type { Worksheet } from './Worksheet';

/**
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/dashboard.html
 */
export interface Dashboard extends Sheet {
  /** The collection of objects contained in the dashboard. */
  objects: DashboardObject[];

  /** Returns the StoryPoint object to which this Dashboard belongs. If the Dashboard doesn't belong to a story, it returns null. */
  parentStoryPoint: StoryPoint | null;

  /**
   * This is a helper method and is equivalent to looping through all of the objects in a dashboard and collecting all of the objects whose type is worksheet. You can use this property to iterate through all of the worksheets in the dashboard.
   *
   * The collection of worksheets contained in the dashboard.
   *
   * The following example uses the JavaScript `forEach()` method to traverse the worksheets in the dashboard.
   *
   * ```
   * let vizActiveSheet = viz.workbook.activeSheet;
   * if (vizActiveSheet.sheetType === "dashboard") {
   *    vizActiveSheet.worksheets.forEach(function (worksheet) {
   *      // do something with the worksheets..
   *    });
   * }
   * ```
   */
  worksheets: Worksheet[];

  //---= methods =---//

  /**
   * Applies a simple categorical filter (non-date) to the dashboard. This method is similar to the method used for worksheets, but applies the filter to all the worksheets in the dashboard that have that same field. Note that the filter is ignored by a worksheet if the worksheet doesn't have the relevant field in its data source.
   *
   * @param { string } fieldName - The name of the field to filter on.
   * @param { string[] } values - The list of values to filter on.
   * @param { TFilterUpdateType } updateType - The update type of this filter (add, all, remove, replace).
   * @param { FilterOptions } filterOptions - Advanced filter options (isExcludeMode).
   *
   * @returns { Promise<string> }  The field name that the filter is applied on.
   */
  applyFilterAsync(
    fieldName: string,
    values: string[],
    updateType: TFilterUpdateType,
    filterOptions: FilterOptions
  ): Promise<string>;

  /**
   * @returns The collection of filters used on the dashboard
   */
  getFiltersAsync(): Promise<Filter[]>;
}
