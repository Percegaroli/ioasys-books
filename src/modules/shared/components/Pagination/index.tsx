import { PropsWithChildren, useEffect, useState } from 'react';
import Button from '../Button';
import ChevronLeftOutlined from '../../assets/icons/chevronLeftOutlined.svg';
import classNames from 'classnames';

interface Props {
  toNextPage: () => void;
  toPreviousPage: () => void;
  currentPage: number;
  totalPages: number;
  classes?: {
    root?: string;
  };
  changePage: (page: number) => void;
}

interface PaginationButton {
  onPress: () => void;
  disabled?: boolean;
}

const PaginationButton = ({
  onPress,
  children,
  disabled,
}: PropsWithChildren<PaginationButton>) => (
  <Button
    isDisabled={disabled}
    onPress={onPress}
    className={classNames(
      'w-8 h-8 flex items-center justify-center border rounded-full border-[rgba(51,51,51,0.2)]'
    )}
  >
    {children}
  </Button>
);

const Pagination = ({
  toNextPage,
  toPreviousPage,
  currentPage,
  totalPages: totalPagesProps,
  classes = {},
  changePage,
}: Props) => {
  const [totalPages, setTotalPages] = useState(Math.ceil(totalPagesProps));

  useEffect(() => {
    if (totalPagesProps && totalPages !== Math.ceil(totalPagesProps)) {
      setTotalPages(Math.ceil(totalPagesProps));
    }
  }, [totalPages, totalPagesProps]);

  useEffect(() => {
    if (totalPages && currentPage > totalPages) {
      changePage(1);
    }
  }, [totalPages, currentPage, changePage]);

  const isPreviousButtonDisabled = currentPage <= 1;
  const isNextButtonDisabled = currentPage === totalPages;

  return (
    <div
      className={classNames(
        'flex items-center gap-x-4 justify-center',
        classes.root ?? ''
      )}
    >
      <PaginationButton
        disabled={isPreviousButtonDisabled}
        onPress={toPreviousPage}
      >
        <ChevronLeftOutlined
          className={classNames(
            ' transform w-3 h-3',
            isPreviousButtonDisabled
              ? 'stroke-[rgba(51,51,51,0.2)]'
              : 'stroke-[#333333]'
          )}
        />
      </PaginationButton>
      <p className="text-xs leading-4 text-[#333333]">
        Página <span className="font-medium">{currentPage}</span> de{' '}
        <span className="font-medium">{totalPages}</span>
      </p>
      <PaginationButton disabled={isNextButtonDisabled} onPress={toNextPage}>
        <ChevronLeftOutlined
          className={classNames(
            ' transform rotate-180 w-3 h-3',
            isNextButtonDisabled
              ? 'stroke-[rgba(51,51,51,0.2)]'
              : 'stroke-black'
          )}
        />
      </PaginationButton>
    </div>
  );
};

export default Pagination;
