/*
  Access Tableau Embedding API v3
  https://help.tableau.com/current/api/embedding_api/en-us/docs/embedding_api_get.html
*/

const LATEST_VERSION = 'tableau.embedding.3.latest.min.js';

const LIB_URL_PATH = 'javascripts/api';
const PUBLIC_URL_PREFIX = 'https://public.tableau.com';
const CLOUD_URL_PREFIX = 'https://online.tableau.com';
const CDN_URL_PREFIX = 'https://embedding.tableauusercontent.com';

export const EmbeddingApiVersion = {
  LATEST: `${PUBLIC_URL_PREFIX}/${LIB_URL_PATH}/${LATEST_VERSION}`,
  PUBLIC: `${PUBLIC_URL_PREFIX}/${LIB_URL_PATH}/${LATEST_VERSION}`,
  CLOUD: `${CLOUD_URL_PREFIX}}/${LIB_URL_PATH}/${LATEST_VERSION}`,

  /** Tableau Version 2022.4 */
  '3.4.0': `${CDN_URL_PREFIX}/tableau.embedding.3.4.0.min.js`,

  /** Tableau Version 2022.3 */
  '3.3.0': `${CDN_URL_PREFIX}/tableau.embedding.3.3.0.min.js`,

  /** Tableau Version 2022.2 */
  '3.2.0': `${CDN_URL_PREFIX}/tableau.embedding.3.2.0.min.js`,

  /** Tableau Version 2022.1 */
  '3.1.0': `${CDN_URL_PREFIX}/tableau.embedding.3.1.0.min.js`,

  /** Tableau Version 2021.4 */
  '3.0.0': `${CDN_URL_PREFIX}/tableau.embedding.3.0.0.min.js`,
} as const;

export type TEmbeddingApiVersion = keyof typeof EmbeddingApiVersion;

export const DefaultEmbeddingApiVersion = '3.4.0';
