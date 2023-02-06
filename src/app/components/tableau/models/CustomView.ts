/**
 * A named snapshot of the workbook at a specific moment.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/customview.html
 */
export interface CustomView<W = unknown> {
  /** Gets or sets whether this is the default custom view. */
  default: boolean;

  /** Gets or sets the user-friendly name for the custom view  */
  name: string;

  /** Gets the user that created the custom view. */
  ownerName: string;

  /** Gets or sets whether the custom view is public or private. */
  shared: boolean;

  /** Unique URL to load this view again. */
  url: string;

  /** Gets the Workbook to which this CustomView belongs. */
  workbook: W;

  //---= methods =---/

  /** Updates an existing custom view */
  saveAsync: () => Promise<CustomView<W>>;
}
