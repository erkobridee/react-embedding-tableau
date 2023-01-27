import { IndexItem, IndexContent } from 'app/components/content/IndexContent';

const items: IndexItem[] = [
  {
    to: 'tableau',
    label: 'Tableau',
  },
  {
    to: 'react',
    label: 'React.js',
  },
  {
    to: 'vite',
    label: 'Vite.js',
  },
  {
    to: 'typescript',
    label: 'TypeScript',
  },
  {
    to: 'tailwind',
    label: 'TailwindCSS',
  },
];

export const BookmarksPageIndex = () => (
  <IndexContent className="space-y-6" items={items} />
);

export default BookmarksPageIndex;
