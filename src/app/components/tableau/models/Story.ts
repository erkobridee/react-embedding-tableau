import type { SheetType } from '../definitions/SheetType';
import type { Sheet } from './Sheet';
import type { StoryPoint } from './StoryPoint';
import type { StoryPointInfo } from './StoryPointInfo';

/**
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/story.html
 */
export interface Story extends Sheet {
  /** The currently active story point. */
  activeStoryPoint: StoryPoint;

  /** An array of StoryPointInfo objects. */
  storyPointsInfo: StoryPointInfo[];

  sheetType: (typeof SheetType)['Story'];

  //---= methods =---//

  /**
   * Activates the next story point if there is one. If the current story point is the last one, then it stays active.
   *
   * @return { Promise<StoryPoint> } Promise
   */
  activateNextStoryPointAsync(): Promise<StoryPoint>;

  /**
   * Activates the previous story point if there is one. If the current story point is the first one, then it stays active.
   *
   * @return { Promise<StoryPoint> } Promise
   */
  activatePreviousStoryPointAsync(): Promise<StoryPoint>;

  /**
   * Activates the story point at the specified index and returns a promise of the activated StoryPoint. Throws a `EmbeddingErrorCodes.IndexOutOfRange` error if the index is less than zero or greater than or equal to the number of story points in the array.
   *
   * @param { number } index
   *
   * @return { Promise<StoryPoint> } Promise
   */
  activateStoryPointAsync(index: number): Promise<StoryPoint>;

  /**
   * Reverts the story point at the specified index and returns a promise of the reverted StoryPointInfo. Throws a `EmbeddingErrorCodes.IndexOutOfRange` error if the index is less than zero or greater than or equal to the number of story points in the array.
   *
   * @param { number } index
   *
   * @return { Promise<StoryPointInfo> } Promise
   */
  revertStoryPointAsync(index: number): Promise<StoryPointInfo>;
}
