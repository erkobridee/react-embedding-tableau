/*
  [Gist] erkobridee/ts-use_consts_instead_of_enums.ts
  https://gist.github.com/erkobridee/576bcba33ed5fcf26c68fb0f32efdef3
*/

export const PageLayoutType = {
  HOME: 'home',
  LANDING: 'landing',
  CONTENT: 'content',
} as const;

export type TPageLayoutTypeKeys = keyof typeof PageLayoutType;

export type TPageLayoutType = (typeof PageLayoutType)[TPageLayoutTypeKeys];

export interface LayoutProps {
  type?: TPageLayoutType;
}
