import tableauLogo from 'assets/logos/tableau.svg';
import viteLogo from 'assets/logos/vite.svg';
import reactLogo from 'assets/logos/react.svg';
import typescriptLogo from 'assets/logos/typescript.svg';
import tailwindcssLogo from 'assets/logos/tailwindcss.svg';

import { ReactComponent as TwitterIcon } from 'assets/icons/twitter.svg';
import { ReactComponent as GithubIcon } from 'assets/icons/github.svg';

//----------------------------------------------------------------------------//

export const currentYear = new Date().getFullYear();

export const author = 'Erko Bridee';

export const appName = 'POC-R+TEA';

export const appNameMeaning =
  'Proof Of Concept - React.js + Tableau Embedded Analytics';

export const keywords =
  'Tableau, Embedded Analytics, React, Vite, TypeScript, TailwindCSS';

//----------------------------------------------------------------------------//

interface IHeaderMenuItem {
  to: string;
  label: string;
}

export const headerMenuItems: IHeaderMenuItem[] = [
  {
    to: '/bookmarks',
    label: 'Bookmarks',
  },
  {
    to: '/embedded-tableau',
    label: 'Embedded Tableau',
  },
];

//----------------------------------------------------------------------------//

export interface DefaultPageProps {
  className?: string;
}

//----------------------------------------------------------------------------//

interface IImageItem {
  href: string;
  src: string;
  className?: string;
  alt?: string;
}

export const techStack: IImageItem[] = [
  {
    href: 'https://www.tableau.com/',
    src: tableauLogo,
    className: 'tableau',
    alt: 'Tableau',
  },
  {
    href: 'https://vitejs.dev',
    src: viteLogo,
    className: 'vite',
    alt: 'Vite.js',
  },
  {
    href: 'https://reactjs.org',
    src: reactLogo,
    className: 'react',
    alt: 'React',
  },
  {
    href: 'https://www.typescriptlang.org/',
    src: typescriptLogo,
    className: 'typescript',
    alt: 'TypeScript',
  },
  {
    href: 'https://tailwindcss.com/',
    src: tailwindcssLogo,
    className: 'tailwindcss',
    alt: 'TailwindCSS',
  },
];

interface IIconItem {
  href: string;
  IconComponent: React.ComponentType;
  className?: string;
  alt?: string;
}

export const socialLinks: IIconItem[] = [
  {
    href: 'https://twitter.com/erkobridee',
    IconComponent: TwitterIcon,
    className: 'twitter',
    alt: 'Twitter @erkobridee',
  },
  {
    href: 'https://github.com/erkobridee/react-embedding-tableau',
    IconComponent: GithubIcon,
    className: 'github',
    alt: 'GitHub Repository',
  },
];

//----------------------------------------------------------------------------//
