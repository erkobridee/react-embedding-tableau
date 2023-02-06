import type { Sheet } from './Sheet';
import type { StoryPointInfo } from './StoryPointInfo';

/**
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/storypoint.html
 */
export interface StoryPoint extends StoryPointInfo {
  /** The Sheet that this story point contains. This will be undefined if the story point does not have a contained sheet. */
  containedSheet?: Sheet;
}
