/*
  How to use React Context effectively | Kent C. Dodds
  https://kentcdodds.com/blog/how-to-use-react-context-effectively
*/

import * as React from 'react';

import { TScriptStatus, useScript } from 'hooks/useScript';

import type { TDeviceType } from './definitions/DeviceType';
import {
  DefaultEmbeddingApiVersion,
  EmbeddingApiVersion,
  TEmbeddingApiVersion,
} from './definitions/EmbeddingApiVersion';
import type { TToolbar } from './definitions/Toolbar';

interface ITableauEmbedContext {
  debug: boolean;

  apiVersion: TEmbeddingApiVersion;
  scriptSrc: string;
  scriptStatus: TScriptStatus;

  baseClassName?: string;
  token?: string;
  device?: TDeviceType;
  toolbar?: TToolbar;
  hideTabs?: boolean;
}

const TableauEmbedContext = React.createContext<
  ITableauEmbedContext | undefined
>(undefined);

interface TableauEmbedProviderProps {
  children: React.ReactNode;
  apiVersion?: TEmbeddingApiVersion;
  baseClassName?: string;
  debug?: boolean;
  jsMin?: boolean;
  token?: string;
  device?: TDeviceType;
  toolbar?: TToolbar;
  hideTabs?: boolean;
}

export const TableauEmbedProvider: React.FunctionComponent<
  TableauEmbedProviderProps
> = ({
  children,
  apiVersion = DefaultEmbeddingApiVersion,
  baseClassName,
  debug = false,
  jsMin = true,
  token,
  device,
  toolbar,
  hideTabs = false,
}) => {
  let scriptSrc = EmbeddingApiVersion[apiVersion] as string;

  /* avoid loading unnecessary script */
  const shouldPreventLoad =
    document.querySelector(
      `script[src^='${scriptSrc.replace('min.js', '')}']`
    ) !== null;

  if (!jsMin) {
    scriptSrc = scriptSrc.replace('min.', '');
  }

  const scriptStatus = useScript(scriptSrc, {
    asModule: true,
    shouldPreventLoad,
  });

  const contextValue: ITableauEmbedContext = {
    debug,
    apiVersion,
    scriptSrc,
    scriptStatus,
    baseClassName,
    token,
    device,
    toolbar,
    hideTabs,
  };

  return (
    <TableauEmbedContext.Provider value={contextValue}>
      {children}
    </TableauEmbedContext.Provider>
  );
};

export const useTableauEmbed = () => {
  const context = React.useContext(TableauEmbedContext);

  if (context === undefined) {
    throw new Error(
      'useTableauEmbed must be used within a TableauEmbedProvider'
    );
  }

  return context;
};

export default TableauEmbedProvider;
