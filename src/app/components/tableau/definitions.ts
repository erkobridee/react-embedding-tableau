/*
  tableau-viz
  https://help.tableau.com/current/api/embedding_api/en-us/docs/embedding_api_configure.html
*/

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface TableauVizCustomElementProps {
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
      ['tableau-viz2']: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > &
        TableauVizCustomElementProps;
    }
  }
}
