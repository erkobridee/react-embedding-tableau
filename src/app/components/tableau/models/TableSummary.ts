/**
 * Represents a table of data in a data source.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/tablesummary.html
 */
export interface TableSummary {
  /** the ID of the connection that this table belongs to. */
  connectionId: string;

  /** the custom SQL used to create this table if it was created with Custom SQL, undefined otherwise. */
  customSQL: string;

  /** Unique string representing this table. */
  id: string;

  /** The name of the table (i.e. the caption). */
  name: string;
}
