import type { TApiMenuType } from '../definitions/ApiMenuType';
import type { TFilterUpdateType } from '../definitions/FilterUpdateType';
import type { TSelectionUpdateType } from '../definitions/SelectionUpdateType';
import type { Annotation } from './Annotation';
import type { ContextMenuOptions } from './ContextMenuOptions';
import type { Dashboard } from './Dashboard';
import type { DataSource } from './DataSource';
import type { DataTable } from './DataTable';
import type { DataTableReader } from './DataTableReader';
import type { Filter } from './Filter';
import type { FilterOptions } from './FilterOptions';
import type { GetSummaryDataOptions } from './GetSummaryDataOptions';
import type { GetUnderlyingDataOptions } from './GetUnderlyingDataOptions';
import type { HierarchicalLevels } from './HierarchicalLevels';
import type { LogicalTable } from './LogicalTable';
import type { MarkInfo } from './MarkInfo';
import type { MarksCollection } from './MarksCollection';
import type { RangeFilterOptions } from './RangeFilterOptions';
import type { RelativeDateFilterOptions } from './RelativeDateFilterOptions';
import type { SelectionCriteria } from './SelectionCriteria';
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

  /**
   * Retrieves a list of the annotations in the worksheet.
   *
   * @returns A list annotations in the worksheet.
   *
   * The following example shows how you might call this method.
   *
   * ```
   * let annotations = await worksheet.getAnnotationsAsync();
   * console.log(annotations);
   * ```
   */
  getAnnotationsAsync(): Promise<Annotation[]>;

  /**
   * Gets the data sources for this worksheet. Note that calling this method might negatively impact performance and responsiveness of the viz that you are embedding. The method is partly asynchronous but includes some serial operations.
   *
   * @returns The primary data source and all of the secondary data sources for this worksheet. By convention the first data source in the array is the primary.
   *
   * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/worksheet.html#getdatasourcesasync
   */
  getDataSourcesAsync(): Promise<DataSource[]>;

  /**
   * Gets the list of filters on a worksheet. Hierarchical filters are not yet supported
   *
   * @returns A promise that resolves to the collection of filters used in this worksheet.
   */
  getFiltersAsync(): Promise<Filter[]>;

  /**
   * Gets the data for the marks which are currently selected on the worksheet. If there are no marks currently selected, an empty model is returned.
   *
   * @returns The marks that are selected.
   *
   * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/worksheet.html#getselectedmarksasync
   */
  getSelectedMarksAsync(): Promise<MarksCollection>;

  /**
   * Gets the summary data table for this worksheet.
   *
   * @param { GetSummaryDataOptions | undefined } options - Collection of options to change the behavior of the call.
   *
   * @returns A data table containing the summary data for the worksheet.
   *
   * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/worksheet.html#getsummarydataasync
   */
  getSummaryDataAsync(options?: GetSummaryDataOptions): Promise<DataTable>;

  /**
   * Gets a summary data table reader for this worksheet. Only one active DataTableReader for summary data is supported.
   *
   * @param { number | undefined } pageRowCount - The number of rows per page. The default and maximum is `10,000` rows.
   * @param { GetSummaryDataOptions } options - Collection of options to change the behavior of the reader.
   *
   * @returns A data table reader to access the summary data for the worksheet.
   */
  getSummaryDataReaderAsync(
    pageRowCount?: number,
    options?: GetSummaryDataOptions
  ): Promise<DataTableReader>;

  /**
   * Gets the underlying data table for this worksheet.
   *
   * @deprecated Use `Worksheet.getUnderlyingTableDataAsync`.
   *
   * @param { GetUnderlyingDataOptions | undefined } options - Collection of options to change the behavior of the call.
   *
   * @returns A data table containing the underlying data for the worksheet.
   *
   * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/worksheet.html#getunderlyingdataasync
   */
  getUnderlyingDataAsync(
    options?: GetUnderlyingDataOptions
  ): Promise<DataTable>;

  /**
   * Gets the underlying data table for the given logical table id. Use the `getUnderlyingTablesAsync` method to identify the logical tables.
   *
   * @param { string } logicalTableId - logical table id.
   * @param { GetUnderlyingDataOptions | undefined } options - Collection of options to change the behavior of the call.
   *
   * @returns A data table containing the underlying data for the given logical table id
   *
   * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/worksheet.html#getunderlyingtabledataasync
   */
  getUnderlyingTableDataAsync(
    logicalTableId: string,
    options?: GetUnderlyingDataOptions
  ): Promise<DataTable>;

  /**
   * Gets a underlying data table reader for the given logical table id. Use the `getUnderlyingTablesAsync` method to identify the logical tables. Only one active DataTableReader per logical table id is supported.
   *
   * @param { string } logicalTableId - logical table id.
   * @param { number | undefined } pageRowCount - The number of rows per page. The default and maximum is `10,000` rows.
   * @param { GetUnderlyingDataOptions | undefined } options - Collection of options to change the behavior of the reader.
   *
   * @returns A data table reader to access the underlying data for the given logical table id.
   */
  getUnderlyingTableDataReaderAsync(
    logicalTableId: string,
    pageRowCount?: number,
    options?: GetUnderlyingDataOptions
  ): Promise<DataTableReader>;

  /**
   * Gets the underlying logical tables used by the worksheet. The resulting logical tables are determined by the measures in the worksheet. If a worksheet's data source contains multiple logical tables and the worksheet contains only measures from one logical table, this API will return one logical table.
   *
   * @returns An array of logical tables corresponding to the measures referenced by the worksheet. Use `await` only inside an Async function.
   *
   * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/worksheet.html#getunderlyingtablesasync
   */
  getUnderlyingTablesAsync(): Promise<LogicalTable[]>;

  /**
   * Removes the corresponding annotation from the worksheet it belongs to. This is intended to be passed an Annotation object received from `getAnnotationsAsync`.
   *
   * @param { Annotation } annotation - The annotation to remove.
   *
   * @returns Empty promise that resolves when the annotation is removed.
   *
   * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/worksheet.html#removeannotationasync
   */
  removeAnnotationAsync(annotation: Annotation): Promise<void>;

  /**
   * Removes the external context menu item inserted by the appendContextMenuAsync method.
   *
   * The parameter menuItemId specifies the menu item to remove and is the return value from the `appendContextMenuAsync` method.
   *
   * Once this function is called, menu item identified by menuItemId won't be rendered to the user in corresponding context menu.
   *
   * @param { TApiMenuType } targetMenu - Defines where to remove new external menu item.
   * @param { string } menuItemId - Unique identifier of external context menu item that user wants to remove.
   */
  removeContextMenuAsync(
    targetMenu: TApiMenuType,
    menuItemId: string
  ): Promise<void>;

  /**
   * Sets the displayed header for the external context menu.
   *
   * The parameter menuHeader specifies the header to be displayed.
   *
   * Once this function is called, menuHeader will be rendered to the user as the header for corresponding context menu. If not called, a default header will be displayed.
   *
   * @param { TApiMenuType } targetMenu - Specifies the location of the external context menu.
   * @param { string } menuHeader - Defines a header string to be displayed for the menu.
   * @param { string } menuDescription - Defines a description of the menu to be displayed in a tooltip
   */
  renameContextMenuAsync(
    targetMenu: TApiMenuType,
    menuHeader: string,
    menuDescription: string
  ): Promise<void>;

  /**
   * Selects the marks by value, using the SelectionCriteria interface. This is intended for manual construction of the desired selections.
   *
   * @param { SelectionCriteria[] } selections - A list of criteria for which marks to select.
   * @param { TSelectionUpdateType } updateType - The type of selection to make: add, remove, or replace.
   *
   * @returns Empty promise that resolves when the selection is complete.
   *
   * The following example shows how you might call this method using state names as the `SelectionCriteria`. The `SelectionUpdateType` is replace (`SelectionUpdateType.Replace`), so these values replace the marks that are currently selected.
   *
   *
   * ```
   * worksheet.selectMarksByValueAsync([{
   *   fieldName: 'State',
   *   value: ['Texas', 'Washington', 'California']
   * }], SelectionUpdateType.Replace );
   * ```
   */
  selectMarksByValueAsync(
    selections: SelectionCriteria[],
    updateType: TSelectionUpdateType
  ): Promise<void>;
}
