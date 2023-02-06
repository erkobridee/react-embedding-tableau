/**
 * Type of mark for a given marks card in a viz.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/enums/tableau.marktype.html
 */
export const MarkType = {
  Area: 'area',
  Bar: 'bar',
  Circle: 'circle',
  GanttBar: 'gantt-bar',
  Line: 'line',
  Map: 'map',
  Pie: 'pie',
  Polygon: 'polygon',
  Shape: 'shape',
  Square: 'square',
  Text: 'text',
} as const;

export type TMarkTypeKeys = keyof typeof MarkType;

export type TMarkType = (typeof MarkType)[TMarkTypeKeys];
