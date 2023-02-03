/**
 * Maps the attributes of tableau-viz custom element
 *
 * @see https://help.tableau.com/current/api/embedding_api/en-us/docs/embedding_api_configure.html
 */
export interface TableauVizCustomElementProps {
  /** Specifies the URL of the view. For security, alway use HTTPS when you specify the URL. */
  src: string;

  /** Indicates whether tabs are hidden or shown. */
  ['hide-table']?: boolean;

  // TODO: define
}

export type TableauVizCustomElement = React.DetailedHTMLProps<
  React.HtmlHTMLAttributes<HTMLElement>,
  HTMLElement
> &
  TableauVizCustomElementProps;

//----------------------------------------------------------------------------//

/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      // TODO: rename it later to tableau-viz
      ['tableau-viz2']: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > &
        TableauVizCustomElementProps;
    }
  }
}
