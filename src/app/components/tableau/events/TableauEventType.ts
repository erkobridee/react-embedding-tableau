/**
 * @see https://help.tableau.com/current/api/embedding_api/en-us/docs/embedding_api_event.html
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/enums/tableaueventtype.html
 */
export const TableauEventType = {
  /** Raised when a custom mark context menu is clicked. */
  CustomMarkContextMenuEvent: 'custommarkcontextmenu',

  /**
   * Raised when a custom view has finished loading. This event is raised after the callback function for FirstInteractive (if any) has been called.
   *
   * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/enums/tableaueventtype.html#firstinteractive
   */
  CustomViewLoaded: 'customviewloaded',

  /** Raised when a custom view has been removed. */
  CustomViewRemoved: 'customviewremoved',

  /** Raised when a custom view has been saved (newly created or updated). */
  CustomViewSaved: 'customviewsaved',

  /** Raised when a custom view has been set as the default view for a workbook. */
  CustomViewSetDefault: 'customviewsetdefault',

  /** Raised when the user clicks on the Edit Button. */
  EditButtonClicked: 'editbuttonclicked',

  /** Raised when the user clicks on the Edit In Desktop Button. */
  EditInDesktopButtonClicked: 'editindesktopbuttonclicked',

  /** Raised when any filter has changed state. You can use this event type with TableauViz objects. */
  FilterChanged: 'filterchanged',

  /** Fired when a viz first becomes interactive */
  FirstInteractive: 'firstinteractive',

  /** Fired when viz size is known */
  FirstVizSizeKnown: 'firstvizsizeknown',

  /** The selected marks on a visualization have changed. You can use this event type with TableauViz objects. */
  MarkSelectionChanged: 'markselectionchanged',

  /**
   * A parameter has had its value modified. You can use this event type with Parameter objects.
   *
   * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/parameter.html
   */
  ParameterChanged: 'parameterchanged',

  /** Raised after a new story point becomes active. */
  StoryPointSwitched: 'storypointswitched',

  /** Raised when a toolbar button or control becomes available or becomes unavailable. */
  ToolbarStateChanged: 'toolbarstatechanged',

  /** Raised after a tab switch occurs (the active sheet has changed). Guarantees the viz object will be interactive after this. */
  TabSwitched: 'tabswitched',

  /**
   * Raised when a URL action occurs. See the UrlActionEvent class.
   *
   * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/urlactionevent.html
   */
  UrlAction: 'urlaction',

  /**
   * Raised when the workbook has been published. This notification is sent when using embedded web authoring functionality.
   */
  WorkbookPublished: 'workbookpublished',

  /**
   * Raised when "publish as" is successful. This notification is sent when using embedded web authoring functionality.
   */
  WorkbookPublishedAs: 'workbookpublishedas',

  /**
   * Raised when the workbook is ready to close. This notification is sent when using embedded web authoring functionality.
   */
  WorkbookReadyToClose: 'workbookreadytoclose',
} as const;

export type TTableauEventTypeKeys = keyof typeof TableauEventType;

export type TTableauEventType =
  (typeof TableauEventType)[TTableauEventTypeKeys];
