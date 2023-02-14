import * as React from 'react';

import cn from 'clsx';

import { buildNumbersRangeArray } from 'utils/buildNumbersRangeArray';

//----------------------------------------------------------------------------//

const BASE_NAV_BUTTON =
  'outline-none transition-colors block px-3 py-2 leading-tight border';

const DOTS_NAV_BUTTON = cn(
  BASE_NAV_BUTTON,
  'disabled:pointer-events-none',
  'bg-transparent border border-slate-200',
  'dark:border-slate-700 dark:text-slate-100',
  'dark:hover:text-slate-100'
);

const NAV_BUTTON_CLASSNAME = cn(
  DOTS_NAV_BUTTON,
  'disabled:opacity-50',
  'hover:bg-slate-100',
  'dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:hover:bg-slate-700',
  'active:bg-slate-200 dark:active:bg-slate-700'
);

const L_CORNER_BUTTON_CLASSNAME = cn(NAV_BUTTON_CLASSNAME, 'ml-0 rounded-l-lg');

const R_CORNER_BUTTON_CLASSNAME = cn(NAV_BUTTON_CLASSNAME, 'ml-0 rounded-r-lg');

const SELECTED_NAV_BUTTON_CLASSNAME = cn(
  BASE_NAV_BUTTON,
  'z-10 text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
);

//----------------------------------------------------------------------------//

export interface PaginationProps {
  disabled?: boolean;

  /** by the default the initial value is 0 that represents the first page */
  page?: number;

  /** amount of available pages */
  pagesCount: number;

  /** notify the page selection where the first page index is 0 */
  onPageChange: (page: number) => void;
}

export const Pagination: React.FunctionComponent<PaginationProps> = ({
  disabled = false,
  page = 0,
  pagesCount,
  onPageChange = () => undefined,
}) => {
  const currentPageNumber = page + 1;
  const isPreviousButtonDisabled = disabled || currentPageNumber === 1;
  const isNextButtonDisabled = disabled || currentPageNumber === pagesCount;

  const navButtonClickHandler = (pageNumber: number) => () => {
    onPageChange(pageNumber - 1);
  };

  //---===---//

  const buildDotsButton = () => (
    <button disabled className={DOTS_NAV_BUTTON}>
      ...
    </button>
  );

  const buildNavButton = (pageNumber: number) => (
    <button
      className={NAV_BUTTON_CLASSNAME}
      onClick={navButtonClickHandler(pageNumber)}
    >
      {pageNumber}
    </button>
  );

  const buildNavSelectedButton = (pageNumber: number) => (
    <button
      disabled
      aria-current="page"
      className={SELECTED_NAV_BUTTON_CLASSNAME}
    >
      {pageNumber}
    </button>
  );

  /**
   *  It will display 9 elements at the pagination items if needed
   */
  const buildNavButtons = () => {
    const itemsBetweenBorderButtons = 9;

    const mapNavPage = (page: number) =>
      page === currentPageNumber
        ? buildNavSelectedButton(page)
        : buildNavButton(page);

    if (pagesCount <= 9) {
      return buildNumbersRangeArray(1, pagesCount).map(mapNavPage);
    }

    const navButtons = [];

    if (currentPageNumber <= 6) {
      navButtons.push(...buildNumbersRangeArray(1, 7).map(mapNavPage));

      navButtons.push(buildDotsButton());
      navButtons.push(buildNavButton(pagesCount));

      return navButtons;
    }

    if (currentPageNumber >= pagesCount - 5) {
      navButtons.push(buildNavButton(1));
      navButtons.push(buildDotsButton());

      navButtons.push(
        ...buildNumbersRangeArray(
          pagesCount - (itemsBetweenBorderButtons - 3),
          pagesCount
        ).map(mapNavPage)
      );

      return navButtons;
    }

    navButtons.push(buildNavButton(1));
    navButtons.push(buildDotsButton());

    navButtons.push(
      ...buildNumbersRangeArray(
        currentPageNumber - 2,
        currentPageNumber + 2
      ).map(mapNavPage)
    );

    navButtons.push(buildDotsButton());
    navButtons.push(buildNavButton(pagesCount));

    return navButtons;
  };

  //---===---//

  return (
    <nav aria-label="data navigation" className="flex items-center">
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <button
            className={L_CORNER_BUTTON_CLASSNAME}
            disabled={isPreviousButtonDisabled}
            onClick={navButtonClickHandler(currentPageNumber - 1)}
          >
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

        {buildNavButtons().map((button, index) => (
          <li key={index}>{button}</li>
        ))}

        <li>
          <button
            className={R_CORNER_BUTTON_CLASSNAME}
            disabled={isNextButtonDisabled}
            onClick={navButtonClickHandler(currentPageNumber + 1)}
          >
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
