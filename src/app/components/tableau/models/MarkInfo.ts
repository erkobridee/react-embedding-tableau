import type { TMarkType } from '../definitions/MarkType';

/**
 * Represents a mark in a worksheet.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/markinfo.html
 */
export interface MarkInfo {
  /** The RGBA value of this mark. */
  color: string;

  /** Unique tuple representing this mark in a drawn visualization. */
  tupleId?: number;

  /** The type of this mark. */
  type: TMarkType;
}
