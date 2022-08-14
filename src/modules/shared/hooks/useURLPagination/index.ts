import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo } from 'react';

interface Config {
  urlParam?: string;
  initialPage?: number;
}

const useURLPagination = ({ urlParam = 'page', initialPage }: Config = {}) => {
  const router = useRouter();
  const currentPage = router.query[urlParam];
  const page = Number(currentPage);

  useEffect(() => {
    if (!page) {
      router.replace({
        query: {
          ...router.query,
          [urlParam]: initialPage || 1,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changePageOnUrl = useCallback(
    (page: number) => {
      if (urlParam) {
        router.push({
          query: {
            ...router.query,
            [urlParam]: page,
          },
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [urlParam]
  );
  const toNextPage = useCallback(
    () => changePageOnUrl(page + 1),
    [changePageOnUrl, page]
  );

  const toPreviousPage = useCallback(
    () => changePageOnUrl(page - 1),
    [changePageOnUrl, page]
  );

  const changePage = useCallback(
    (nextPage: number) => changePageOnUrl(nextPage),
    [changePageOnUrl]
  );

  return useMemo(
    () => ({
      page,
      changePage: changePage,
      toNextPage: toNextPage,
      toPreviousPage: toPreviousPage,
    }),
    [changePage, page, toNextPage, toPreviousPage]
  );
};

export default useURLPagination;
