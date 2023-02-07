import type { Parameter } from '../models/Parameter';

/**
 * An event which is raised when the value of a parameter changes.
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/reference/interfaces/parameterchangedevent.html
 */
export interface ParameterChangedEvent {
  /**
   * @returns The parameter that was changed.
   */
  getParameterAsync(): Promise<Parameter>;
}
