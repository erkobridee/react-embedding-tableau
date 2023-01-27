/* eslint @typescript-eslint/no-explicit-any: ["off"] */

import DOMPurify from 'dompurify';

import tableaumd from 'content/bookmarks/tableau.md';
import reactmd from 'content/bookmarks/reactjs.md';
import vitemd from 'content/bookmarks/vitejs.md';
import typescriptmd from 'content/bookmarks/typescript.md';
import tailwindmd from 'content/bookmarks/tailwindcss.md';

interface MarkdownModule {
  /** The output HTML from the parsed Markdown. */
  html: string;

  /**
   * A JS object of the parsed Markdown front-matter
   *
   * @example
   *
   * **input**:
   *
   * ```md
   * ---
   * name: John Doe
   * ---
   * ```
   *
   * **output**:
   *
   * ```ts
   * {
   *   name: "John Doe"
   * }
   * ```
   *
   */
  metadata: {
    [key: string]: any;
  };

  /**
   * The name of the parsed Markdown file.
   *
   * @example "blog-post.md"
   *
   */
  filename: string;

  /**
   * The absolute path to the parsed Markdown file.
   *
   * @example "~/src/blog-post.md"
   *
   */
  path: string;
}

const processMarkdownData = (data: MarkdownModule) => ({
  ...data,
  html: DOMPurify.sanitize(data.html),
});

const tableau = processMarkdownData(tableaumd);
const react = processMarkdownData(reactmd);
const vite = processMarkdownData(vitemd);
const typescript = processMarkdownData(typescriptmd);
const tailwind = processMarkdownData(tailwindmd);

export { tableau, react, vite, typescript, tailwind };
