/**
 * An event that signals when a user selects a different tab in a workbook.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/tabswitchedevent.html
 */
export interface TabSwitchedEvent {
  /** The name of the sheet that is active after the tab switch event. */
  newSheetName: string;

  /** The name of the sheet that was active before the tab switch event occurred. */
  oldSheetName: string;
}
