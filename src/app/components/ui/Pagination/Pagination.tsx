import * as React from 'react';

import cn from 'clsx';

export interface PaginationProps {
  disabled?: boolean;

  /** by the default the initial value is 0 that represents the first page */
  page?: number;

  /** amount of available pages */
  pagesCount: number;

  /** default value is 10 buttons */
  maxButtons?: number;

  // TODO: remove the optional
  /** notify the page selection where the first page index is 0 */
  onPageChange?: (page: number) => void;
}

const BASE_NAV_BUTTON = 'block px-3 py-2 leading-tight border';

const BASE_CORDER_BUTTON_CLASSNAME = cn(
  BASE_NAV_BUTTON,
  'text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
);

const L_CORNER_BUTTON_CLASSNAME = cn(
  BASE_CORDER_BUTTON_CLASSNAME,
  'ml-0 rounded-l-lg'
);

const R_CORNER_BUTTON_CLASSNAME = cn(
  BASE_CORDER_BUTTON_CLASSNAME,
  'ml-0 rounded-r-lg'
);

const NAV_BUTTON_CLASSNAME = cn(
  BASE_NAV_BUTTON,
  'text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
);
const SELECTED_NAV_BUTTON_CLASSNAME = cn(
  BASE_NAV_BUTTON,
  'z-10 text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
);

export const Pagination: React.FunctionComponent<PaginationProps> = () => {
  // TODO: define the code

  return (
    <nav aria-label="data navigation" className="flex items-center">
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <button className={L_CORNER_BUTTON_CLASSNAME}>
            <span className="sr-only">Previous</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
        <li>
          <button className={NAV_BUTTON_CLASSNAME}>1</button>
        </li>
        <li>
          <button className={NAV_BUTTON_CLASSNAME}>2</button>
        </li>
        <li>
          <button aria-current="page" className={SELECTED_NAV_BUTTON_CLASSNAME}>
            3
          </button>
        </li>
        <li>
          <button className={NAV_BUTTON_CLASSNAME}>4</button>
        </li>
        <li>
          <button className={NAV_BUTTON_CLASSNAME}>5</button>
        </li>
        <li>
          <button className={R_CORNER_BUTTON_CLASSNAME}>
            <span className="sr-only">Next</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
