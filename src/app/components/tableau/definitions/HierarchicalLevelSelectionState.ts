/**
 * Enum that represents the selection state of a level in a hierarchical filter
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/enums/tableau.hierarchicallevelselectionstate.html
 */
export const HierarchicalLevelSelectionState = {
  AllSelected: 'all-selected',
  NoneSelected: 'none-selected',
  SomeSelected: 'some-selected',
  UnknownSelected: 'unknown-selected',
} as const;

export type THierarchicalLevelSelectionStateKeys =
  keyof typeof HierarchicalLevelSelectionState;

export type THierarchicalLevelSelectionState =
  (typeof HierarchicalLevelSelectionState)[THierarchicalLevelSelectionStateKeys];
