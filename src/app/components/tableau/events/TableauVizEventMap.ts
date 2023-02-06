interface UrlActionEvent {
  /** The target attribute associated with URL (for example, the identifier associated with a browser tab). */
  target: string;

  /** The URL associated with the event. */
  url: string;
}

export interface TableauVizEventMap {
  custommarkcontextmenu: Event;
  customviewloaded: Event;
  customviewremoved: Event;
  customviewsaved: Event;
  customviewsetdefault: Event;
  editbuttonclicked: Event;
  editindesktopbuttonclicked: Event;
  filterchanged: Event;
  firstinteractive: Event;
  firstvizsizeknown: Event;
  markselectionchanged: Event;
  parameterchanged: Event;
  storypointswitched: Event;
  toolbarstatechanged: Event;
  tabswitched: Event;
  urlaction: CustomEvent<UrlActionEvent>;
  workbookpublished: Event;
  workbookpublishedas: Event;
  workbookreadytoclose: Event;
}
