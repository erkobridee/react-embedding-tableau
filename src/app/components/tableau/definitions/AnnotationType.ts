/**
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/enums/tableau.annotationtype.html
 */
export const AnnotationType = {
  Area: 'area',
  Mark: 'mark',
  Point: 'point',
} as const;

export type TAnnotationTypeKeys = keyof typeof AnnotationType;

export type TAnnotationType = (typeof AnnotationType)[TAnnotationTypeKeys];
