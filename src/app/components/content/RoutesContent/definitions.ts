import type * as React from 'react';
import type { IndexItem } from 'app/components/content/IndexContent';

export interface ComponentClassname {
  className?: string;
}

export interface ComponentIndexPage extends ComponentClassname {
  items?: IndexItem[];
}

export interface BasePageConfig<T = ComponentClassname>
  extends ComponentClassname {
  containerClassname?: string;
  PageComponent: React.ComponentType<T>;
}

export type TPartialBasePageConfig<T = ComponentClassname> = Partial<
  BasePageConfig<T>
>;

export interface RoutePageConfig<T = ComponentClassname>
  extends BasePageConfig<T> {
  path: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  description?: React.ReactNode;
}
