import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useState } from 'react';

interface Config {
  urlParam?: string;
  initialPage?: number;
}

const usePagination = ({ urlParam, initialPage }: Config = {}) => {
  const router = useRouter();
  const [page, setPage] = useState(() => {
    const queryParam = Number(router.query.urlParam);
    if (urlParam && !Number.isNaN(queryParam)) {
      return queryParam;
    }
    return initialPage ?? 1;
  });

  useEffect(() => {
    if (urlParam) {
      if (
        !Number.isNaN(router.query.urlParam) &&
        Number(router.query.urlParam) !== page
      ) {
        router.push({
          query: {
            ...router.query,
            [urlParam]: page,
          },
        });
      }
    }
  }, [router, urlParam]);

  const changePage = useCallback((nextPage: number) => {
    setPage(nextPage);
    if (urlParam) {
      router.push({
        query: {
          ...router.query,
          [urlParam]: nextPage,
        },
      });
    }
  }, []);

  const toNextPage = useCallback(() => {
    setPage((page) => page + 1);
  }, []);

  const toPreviousPage = useCallback(() => {
    setPage((page) => page - 1);
  }, []);

  return useMemo(
    () => ({ page, changePage, toNextPage, toPreviousPage }),
    [page, changePage, toNextPage, toPreviousPage]
  );
};

export default usePagination;
