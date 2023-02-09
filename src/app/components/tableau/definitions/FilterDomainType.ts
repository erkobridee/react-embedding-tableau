/**
 * The domain type for a filter
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/enums/tableau.filterdomaintype.html
 */
export const FilterDomainType = {
  /** list of all possible domain values from database */
  Database: 'database',

  /** The domain values that are relevant to the specified filter i.e. the domain is restricted by a previous filter */
  Relevant: 'relevant',
} as const;

export type TFilterDomainTypeKeys = keyof typeof FilterDomainType;

export type TFilterDomainType =
  (typeof FilterDomainType)[TFilterDomainTypeKeys];
