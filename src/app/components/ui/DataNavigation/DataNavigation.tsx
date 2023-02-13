import * as React from 'react';

import { useDidUpdate } from 'hooks/useDidUpdate';

// import cn from 'clsx';

import { Input } from 'app/components/ui/Input';
import { Pagination, PaginationProps } from 'app/components/ui/Pagination';

type DataNavigationProps = PaginationProps;

export const DataNavigation: React.FunctionComponent<DataNavigationProps> = ({
  disabled = false,
  page = 0,
  pagesCount,
  maxButtons = 10,
  onPageChange = (_: number) => undefined,
}) => {
  const [currentPageInputValue, setCurrentPageInputValue] = React.useState(
    page + 1
  );

  useDidUpdate(() => {
    setCurrentPageInputValue(page + 1);
  }, [page]);

  const triggerPageChange = (page: number) => onPageChange(page);

  const currentPageInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { valueAsNumber } = event.currentTarget;
    setCurrentPageInputValue(valueAsNumber);
  };

  const currentPageInputBlurHandler = (
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    const { valueAsNumber } = event.target;

    const newValue =
      valueAsNumber < 1
        ? 1
        : valueAsNumber > pagesCount
        ? pagesCount
        : valueAsNumber;

    setCurrentPageInputValue(newValue);
    triggerPageChange(newValue - 1);
  };

  const paginationChangeHandler = (page: number) => {
    setCurrentPageInputValue(page);
    triggerPageChange(page);
  };

  return (
    <div className="flex gap-4 items-center">
      <span>TODO: finish the implementation</span>

      <Pagination
        {...{
          disabled,
          page,
          pagesCount,
          maxButtons,
          onPageChange: paginationChangeHandler,
        }}
      />

      <div className="flex gap-2 items-center">
        <span className="font-bold">Page:</span>
        <Input
          className="min-w-[5rem] py-1"
          type="number"
          max={pagesCount}
          min={1}
          step={1}
          value={currentPageInputValue}
          onChange={currentPageInputChangeHandler}
          onBlur={currentPageInputBlurHandler}
        />
        <span>{`/ ${pagesCount}`}</span>
      </div>
    </div>
  );
};

export default DataNavigation;
