/*
  How to use React Context effectively | Kent C. Dodds
  https://kentcdodds.com/blog/how-to-use-react-context-effectively
*/

import * as React from 'react';

import { TScriptStatus, useScript } from 'hooks/useScript';

import {
  DefaultEmbeddingApiVersion,
  EmbeddingApiVersion,
  TEmbeddingApiVersion,
} from './definitions/EmbeddingApiVersion';
import type { TableauEmbedBaseProps } from './definitions/TableauEmbedBaseProps';

interface ITableauEmbedContext extends TableauEmbedBaseProps {
  apiVersion: TEmbeddingApiVersion;
  scriptSrc: string;
  scriptStatus: TScriptStatus;

  baseClassName?: string;
}

const TableauEmbedContext = React.createContext<
  ITableauEmbedContext | undefined
>(undefined);

interface TableauEmbedProviderProps extends TableauEmbedBaseProps {
  children: React.ReactNode;
  apiVersion?: TEmbeddingApiVersion;
  baseClassName?: string;
  jsMin?: boolean;
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
  loading,
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
    loading,
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
