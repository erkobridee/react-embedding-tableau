/**
 * What the object represents in a dashboard.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/enums/tableau.dashboardobjecttype.html
 */
export const DashboardObjectType = {
  Blank: 'blank',
  Extension: 'extension',
  Image: 'image',
  Legend: 'legend',
  PageFilter: 'page-filter',
  ParameterControl: 'parameter-control',
  QuickFilter: 'quick-filter',
  Text: 'text',
  Title: 'title',
  WebPage: 'web-page',
  Worksheet: 'worksheet',
} as const;

export type TDashboardObjectTypeKeys = keyof typeof DashboardObjectType;

export type TDashboardObjectType =
  (typeof DashboardObjectType)[TDashboardObjectTypeKeys];
