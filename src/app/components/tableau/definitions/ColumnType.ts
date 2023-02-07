/**
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/enums/tableau.columntype.html
 */
export const ColumnType = {
  Continuous: 'continuous',
  Discrete: 'discrete',
} as const;

export type TColumnTypeKeys = keyof typeof ColumnType;

export type TColumnType = (typeof ColumnType)[TColumnTypeKeys];
