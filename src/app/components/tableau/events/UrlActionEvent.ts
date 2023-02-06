export interface UrlActionEvent {
  /** The target attribute associated with URL (for example, the identifier associated with a browser tab). */
  target: string;

  /** The URL associated with the event. */
  url: string;
}
