/**
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/enums/devicetype.html
 */
export const DeviceType = {
  DEFAULT: 'default',
  DESKTOP: 'desktop',
  TABLET: 'tabled',
  PHONE: 'phone',
} as const;

export type TDeviceTypeKeys = keyof typeof DeviceType;

export type TDeviceType = (typeof DeviceType)[TDeviceTypeKeys];
