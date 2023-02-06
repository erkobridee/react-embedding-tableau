import type { MarkInfo } from './MarkInfo';
import type { Sheet } from './Sheet';

/**
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/worksheet.html
 */
export interface Worksheet<W = unknown> extends Sheet<W> {
  parentDashboard: any; // TODO: define Dashboard

  parentStoryPoint: any; // TODO: define StoryPoint

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

  // TODO: define
  /*
  appendContextMenuAsync
  applyFilterAsync
  applyHierarchicalFilterAsync
  applyRangeFilterAsync
  applyRelativeDateFilterAsync
  clearFilterAsync
  clearSelectedMarksAsync
  executeContextMenuAsync
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
