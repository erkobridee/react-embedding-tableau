import { Link } from 'react-router-dom';

export const BookmarksPageIndex = () => (
  <div className="flex flex-col space-y-6 p-8">
    <Link className="hover:underline" to="tableau">
      Tableau
    </Link>

    <Link className="hover:underline" to="react">
      React.js
    </Link>

    <Link className="hover:underline" to="tailwind">
      TailwindCSS
    </Link>

    <Link className="hover:underline" to="vite">
      Vite.js
    </Link>
  </div>
);

export default BookmarksPageIndex;
