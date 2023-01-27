/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module '*.md' {
  /** The output HTML from the parsed Markdown. */
  export const html: string;

  export const metadata: Record<string, any>;

  export const filename: string;
  export const path: string;

  const markdown: {
    html: string;
    metadata: Record<string, any>;
    filename: string;
    path: string;
  };
  export default markdown;
}
