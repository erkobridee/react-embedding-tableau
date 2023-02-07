import type { CustomMarkContextMenuEvent } from './CustomMarkContextMenuEvent';
import type { CustomViewEvent } from './CustomViewEvent';
import type { FilterChangedEvent } from './FilterChangedEvent';
import type { FirstVizSizeKnownEvent } from './FirstVizSizeKnownEvent';
import type { MarksSelectedEvent } from './MarksSelectedEvent';
import type { ParameterChangedEvent } from './ParameterChangedEvent';
import type { StoryPointSwitchedEvent } from './StoryPointSwitchedEvent';
import type { TabSwitchedEvent } from './TabSwitchedEvent';
import type { ToolbarStateChangedEvent } from './ToolbarStateChangedEvent';
import type { UrlActionEvent } from './UrlActionEvent';

export interface TableauVizEventMap {
  custommarkcontextmenu: CustomEvent<CustomMarkContextMenuEvent>;
  customviewloaded: CustomEvent<CustomViewEvent>;
  customviewremoved: CustomEvent<CustomViewEvent>;
  customviewsaved: CustomEvent<CustomViewEvent>;
  customviewsetdefault: CustomEvent<CustomViewEvent>;
  editbuttonclicked: Event;
  editindesktopbuttonclicked: Event;
  filterchanged: CustomEvent<FilterChangedEvent>;
  firstinteractive: Event;
  firstvizsizeknown: CustomEvent<FirstVizSizeKnownEvent>;
  markselectionchanged: CustomEvent<MarksSelectedEvent>;
  parameterchanged: CustomEvent<ParameterChangedEvent>;
  storypointswitched: CustomEvent<StoryPointSwitchedEvent>;
  toolbarstatechanged: CustomEvent<ToolbarStateChangedEvent>;
  tabswitched: CustomEvent<TabSwitchedEvent>;
  urlaction: CustomEvent<UrlActionEvent>;
  workbookpublished: Event;
  workbookpublishedas: Event;
  workbookreadytoclose: Event;
}
