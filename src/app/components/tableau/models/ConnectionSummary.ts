/**
 * Represents a connection within a datasource (ex: A SQL Server connection). A data source can be composed of one or more connections.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/connectionsummary.html
 */
export interface ConnectionSummary {
  /** Unique string representing this connection. */
  id: string;

  /** The name of the connection (i.e. the caption). */
  name: string;

  /** The URI to which the connection is pointing, if applicable. If a data source is a published data source, the URI is returned as `localhost`. */
  serverURI?: string;

  /** The type of the connection (i.e. SQL Server, web data connector). */
  type: string;
}
