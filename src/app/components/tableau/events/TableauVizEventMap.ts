import type { CustomMarkContextMenuEvent } from './CustomMarkContextMenuEvent';
import type { UrlActionEvent } from './UrlActionEvent';

export interface TableauVizEventMap {
  custommarkcontextmenu: CustomEvent<CustomMarkContextMenuEvent>;
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
