import type { TAnnotationType } from '../definitions/AnnotationType';

/**
 * Represents an annotation in a worksheet.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/annotation.html
 */
export interface Annotation {
  /** The formatted annotation as a HTML string. HTML is currently not accepted when adding an annotation. */
  annotationHTML: string;

  /** Unique id representing the annotation. */
  annotationId: number;

  /** The plain text of the annotation. */
  annotationText: string;

  /** The annotation type. */
  annotationType: TAnnotationType;

  /** Unique tuple representing the mark that is being annotated. The tupleId will be 0 for Area or Point annotations. */
  tupleId: number;
}
