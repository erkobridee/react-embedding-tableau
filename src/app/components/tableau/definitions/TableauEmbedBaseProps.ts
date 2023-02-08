import type { TDeviceType } from './DeviceType';
import type { TToolbar } from './Toolbar';

export interface TableauEmbedBaseProps {
  /** The token used for authorization */
  token?: string;

  /** Indicates the position of the toolbar or if it should be hidden */
  toolbar?: TToolbar;

  /** default value `false` */
  debug?: boolean;

  /** default value `false` */
  hideTabs?: boolean;

  /** Specifies a device layout for a dashboard, if it exists. If not specified, defaults to loading a layout based on the smallest dimension of the hosting `iframe` element. */
  device?: TDeviceType;

  /** React element to be displayed on the loading state  */
  loading?: React.ReactNode;
}
