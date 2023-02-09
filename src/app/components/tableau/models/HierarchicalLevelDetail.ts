import type { THierarchicalLevelSelectionState } from '../definitions/HierarchicalLevelSelectionState';

/**
 * Details about each level in a hierarchical filter
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/hierarchicalleveldetail.html
 */
export interface HierarchicalLevelDetail {
  /** the level selection state */
  levelSelectionState: THierarchicalLevelSelectionState;

  /** the level name. In the ByCategory example, the name could be 'Family', 'Category', 'Subcategory', 'Brand', or 'Sku'. */
  name: string;
}
