/**
 * Role of a field.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/enums/tableau.fieldroletype.html
 */
export const FieldRoleType = {
  Dimension: 'dimension',
  Measure: 'measure',
  Unknown: 'unknown',
} as const;

export type TFieldRoleTypeKeys = keyof typeof FieldRoleType;

export type TFieldRoleType = (typeof FieldRoleType)[TFieldRoleTypeKeys];
