import type { Filter } from './Filter';
import type { HierarchicalFilterDataValue } from './HierarchicalFilterDataValue';
import type { HierarchicalLevelDetail } from './HierarchicalLevelDetail';

/**
 * A Hierarchical Filter Hierarchical Filters are used when a hierarchical field is used as a filter on a cube database. As an example, assume a hierarchical field in Product, named ByCategory. ByCategory has the following five levels: Family, Category, Subcategory, Brand, Sku.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/hierarchicalfilter.html
 */
export interface HierarchicalFilter extends Filter {
  /** A list of values applied to this hierarchical filter. */
  appliedValues: HierarchicalFilterDataValue[];

  /** The dimension name associated with the filter. In the ByCategory filter example, this would be 'Product' */
  dimensionName: string;

  /** The hierarchy caption associated with the filter. In the ByCategory filter example, this would be '[Product].[ByCategory]' */
  hierarchyCaption: string;

  /** True if all the values are selected for this filter. When 'All' is selected, appliedValues returns an empty list. */
  isAllSelected: boolean;

  /** Details about each level in the hierarchical filter. */
  levelDetails: HierarchicalLevelDetail[];

  /** The number of levels in the hierarchical filter. In the ByCategory filter example, this would be 5 */
  numberOfLevels: number;
}
