import type { DataValue } from './DataValue';

/**
 * A selected value in a hierarchical filter
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/hierarchicalfilterdatavalue.html
 */
export interface HierarchicalFilterDataValue {
  /** the path to this selected item. In the ByCategory example, the hierarchicalPath for a level 2 item could be '[Outdoor & Sporting].[Bikes].[Kids' Bikes]'. */
  hierarchicalPath: string;

  /** the level of this selected item. In the ByCategory example, the level could be 0-4. For '[Outdoor & Sporting].[Bikes].[Kids' Bikes]', the level is 2. */
  level: number;

  /** the DataValue of the seleted item */
  value: DataValue;
}
