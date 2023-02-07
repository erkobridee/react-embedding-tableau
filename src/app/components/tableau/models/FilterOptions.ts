/**
 * Passed into the applyFilter methods to control advanced filtering options.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/filteroptions.html
 */
export interface FilterOptions {
  /** Determines whether the filter will apply in exclude mode or include mode. The default is include, which means that you use the fields as part of a filter. Exclude mode means that you include everything else except the specified fields. */
  isExcludeMode: boolean;
}
