/**
 * An event which is raised when a toolbar button or control becomes available or becomes unavailable.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/toolbarstatechangedevent.html
 */
export interface ToolbarStateChangedEvent {
  /** Gets the staus of Redo button in the toolbar. */
  canRedo: boolean;

  /** Gets the staus of Undo button in the toolbar. */
  canUndo: boolean;
}
