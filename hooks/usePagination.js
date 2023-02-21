import { useMemo } from 'react';

export const DOTS = '...';

const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({
  paginationTotal,
  siblingPagination = 1,
  paginationCurrent
}) => {
  const paginationRange = useMemo(() => {

    const totalPageNumbers = siblingPagination + 5;

    if (totalPageNumbers >= paginationTotal) {
      return range(1, paginationTotal);
    }

    const leftSiblingIndex = Math.max(paginationCurrent - siblingPagination, 1);
    const rightSiblingIndex = Math.min(
      paginationCurrent + siblingPagination,
      paginationTotal
    );

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < paginationTotal - 2;

    const firstPageIndex = 1;
    const lastPageIndex = paginationTotal;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingPagination;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, paginationTotal];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingPagination;
      let rightRange = range(
        paginationTotal - rightItemCount + 1,
        paginationTotal
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [paginationTotal, siblingPagination, paginationCurrent]);

  return paginationRange;
};
