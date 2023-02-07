import type { TDashboardObjectType } from '../definitions/DashboardObjectType';
import type { Dashboard } from './Dashboard';
import type { Point } from './Point';
import type { Size } from './Size';
import type { Worksheet } from './Worksheet';

export interface DashboardObject {
  /** The Dashboard object that contains this object. */
  dashboard: Dashboard;

  /** The id of the dashboard object. */
  id: number;

  /** True if the object is floating in the dashboard. */
  isFloating: boolean;

  /** True if the object is visible. */
  isVisible: boolean;

  /** The name of the dashboard object. This is the name given to the object during authoring. */
  name: string;

  /** The coordinates relative to the top-left corner of the dashboard containing this object. */
  position: Point;

  /** The size of the object. */
  size: Size;

  /** What the object represents. */
  type: TDashboardObjectType;

  /** If type returns WORKSHEET, this returns a Worksheet object, undefined otherwise. */
  worksheet?: Worksheet;
}
