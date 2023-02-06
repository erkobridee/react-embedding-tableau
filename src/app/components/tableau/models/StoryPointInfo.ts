import type { Story } from './Story';

/**
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/storypointinfo.html
 */
export interface StoryPointInfo {
  /** The value indicating whether the story point is the currently active point in the story. */
  active: boolean;

  /** The content of the textual description for this story point. */
  caption: string;

  /** The zero-based index of this story point within the parent Story. */
  index: number;

  /** The Story object that contains this story point.  */
  parentStory: Story;

  /** A boolean value indicating whether the story point is updated. If the value is false that means there are no changes from the last time the story point was “captured”. */
  updated: boolean;
}
