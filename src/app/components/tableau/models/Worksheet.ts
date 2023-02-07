import type { TApiMenuType } from '../definitions/ApiMenuType';
import type { TFilterUpdateType } from '../definitions/FilterUpdateType';
import type { ContextMenuOptions } from './ContextMenuOptions';
import type { Dashboard } from './Dashboard';
import type { FilterOptions } from './FilterOptions';
import type { HierarchicalLevels } from './HierarchicalLevels';
import type { MarkInfo } from './MarkInfo';
import type { RangeFilterOptions } from './RangeFilterOptions';
import type { RelativeDateFilterOptions } from './RelativeDateFilterOptions';
import type { Sheet } from './Sheet';
import type { StoryPoint } from './StoryPoint';

/**
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/worksheet.html
 */
export interface Worksheet extends Sheet {
  /** The dashboard object to which this worksheet belong. If the worksheet is not on a dashboard, it returns null. */
  parentDashboard: Dashboard | null;

  /** The StoryPoint object to which this worksheet belongs. If the worksheet is not in a story, it returns null. */
  parentStoryPoint: StoryPoint | null;

  //---= methods =---//

  /**
   * Add an annotation to the specified mark. This is intended to be passed a MarkInfo object received from a DataTable. MarkInfo can be found in the DataTable returned from getSelectedMarksAsync.
   *
   * @param { MarkInfo } mark - The mark to annotate.
   * @param { string } annotationText - The text to display in the annotation.
   *
   * @return { Promise<void> } Promise
   *
   * Empty promise that resolves when the annotation is complete.
   *
   * The following example shows how you might call this method using a MarkInfo object.
   *
   * ```
   * const markCollection = await worksheet.getSelectedMarksAsync();
   * const markToAnnotate = marksCollection.data[0].marksInfo[0];
   * await worksheet.annotateMarkAsync(markToAnnotate, 'Manufacturing line #2 shutdown triggered');
   * ```
   *
   */
  annotateMarkAsync(mark: MarkInfo, annotationText: string): Promise<void>;

  /**
   * Adds external context menu item into location defined by targetMenu input parameter.
   *
   * Calling this function does not have immediate affect, it just registers new menu item. When the corresponding context menu is later shown, the new menu item is also rendered there.
   *
   * The return value of this function is the unique identifier for the newly inserted context menu item.
   *
   * When the user clicks the new context menu item, a TableauEvent is raised. Each targetMenu parameter will have a different event type. The unique identifier could be used to distinguish different menu items that have the same event type.
   *
   * @param targetMenu - Defines where to insert the new external menu item.
   * @param config - Provides configuration information for new external menu item.
   *
   * @returns Unique identifier for newly inserted context menu item.
   */
  appendContextMenuAsync(
    targetMenu: TApiMenuType,
    config: ContextMenuOptions
  ): Promise<string>;

  /**
   * Applies the list of provided categorical filter values.
   *
   * @param { string } fieldName - The name of the field to filter on.
   * @param { string[] } values - The list of values to filter on.
   * @param { TFilterUpdateType } updateType - The update type of this filter (add, all, remove, replace).
   * @param { FilterOptions } filterOptions - Advanced filter options (isExcludeMode).
   *
   * @returns The field name that the filter is applied on.
   */
  applyFilterAsync(
    fieldName: string,
    values: string[],
    updateType: TFilterUpdateType,
    filterOptions: FilterOptions
  ): Promise<string>;

  /**
   * Applies the list of provided hierarchial filter values.
   *
   * @param { string } fieldName - The name of the field to filter on.
   * @param { string[] | HierarchicalLevels } values - The list of values or levels to filter on.
   * @param { TFilterUpdateType } updateType - The update type of this filter (add, all, remove, replace).
   * @param { FilterOptions } options
   *
   * @returns The field name that the filter is applied on.
   */
  applyHierarchicalFilterAsync(
    fieldName: string,
    values: string[] | HierarchicalLevels,
    updateType: TFilterUpdateType,
    options: FilterOptions
  ): Promise<string>;

  /**
   * Applies a range filter to a quantitative or date field.
   *
   * @param { String } fieldName - The name of the field to filter on
   * @param { RangeFilterOptions } filterOptions - Filter Options: min, max, nullOption. Atleast one of of min and max is required. For applying date filters, UTC Date objects are expected. (i.e., var min = new Date(Date.UTC(1999, 0, 1)))
   *
   * @returns The field name that the filter is applied on.
   */
  applyRangeFilterAsync(
    fieldName: string,
    filterOptions: RangeFilterOptions
  ): Promise<string>;

  /**
   * Applies a relative date filter.
   *
   * @param { string } fieldName - The name of the field to filter on.
   * @param { RelativeDateFilterOptions } options - The relative date filter options (anchorDate, periodType, rangeType, rangeN). When the rangeType is LASTN or NEXTN, the rangeN is required.
   *
   * @returns The field name that the filter is applied on.
   *
   * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/worksheet.html#applyrelativedatefilterasync
   */
  applyRelativeDateFilterAsync(
    fieldName: string,
    options: RelativeDateFilterOptions
  ): Promise<string>;

  /**
   * Resets existing filters on the given field. Categorical filters are reset to "All," and range filters are reset to the full range. Relative date filters can not be reset, consider using the applyRelativeDateFilterAsync API.
   *
   * @param { string } fieldName - The name of the field to clear filter on.
   *
   * @returns The field to clear filter on.
   */
  clearFilterAsync(fieldName: string): Promise<string>;

  /**
   * Clears selected marks in the current worksheet.
   *
   * @returns Empty promise that resolves when the selection has been cleared.
   *
   * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/worksheet.html#clearselectedmarksasync
   */
  clearSelectedMarksAsync(): Promise<void>;

  /**
   * Executes the external context menu item inserted by the appendContextMenuAsync method.
   *
   * The parameter menuItemId specifies the menu item to execute and is the return value from the appendContextMenuAsync method.
   *
   * Once this function is called, menu item identified by menuItemId will be executed.
   *
   * @param { TApiMenuType } targetMenu - Defines where to execute new external menu item.
   * @param { string } menuItemId - Unique identifier of external context menu item that user wants to execute.
   */
  executeContextMenuAsync(
    targetMenu: TApiMenuType,
    menuItemId: string
  ): Promise<void>;

  // TODO: define
  /*
  getAnnotationsAsync
  getDataSourcesAsync
  getFiltersAsync
  getSelectedMarksAsync
  getSummaryDataAsync
  getSummaryDataReaderAsync
  getUnderlyingDataAsync
  getUnderlyingTableDataAsync
  getUnderlyingTableDataReaderAsync
  getUnderlyingTablesAsync
  removeAnnotationAsync
  removeContextMenuAsync
  renameContextMenuAsync
  selectMarksByValueAsync
  */
}
