import { useQuery } from '@tanstack/react-query';
import { ApiRoutes } from '../../../shared/enums/ApiRoutes';
import useAxios from '../../../shared/hooks/useAxios';
import { PaginatedQueryResponse } from '../../../shared/interfaces/PaginatedQueryResponse';
import { PaginatedRequestConfig } from '../../../shared/interfaces/PaginatedRequestConfig';

export interface BookDTO {
  authors: Array<string>;
  title: string;
  description: string;
  pageCount: number;
  category: string;
  imageUrl?: string;
  language: string;
  isbn10: string;
  isbn13: string;
  publisher: string;
  published: number;
  id: string;
}

const useBooksList = (config: Partial<PaginatedRequestConfig>) => {
  const axios = useAxios();
  return useQuery([ApiRoutes.BOOKS, config.amount, config.page], () =>
    axios.get<PaginatedQueryResponse<BookDTO>>(ApiRoutes.BOOKS, {
      params: {
        page: config.page ?? 1,
        amount: config.amount ?? 10,
      },
    })
  );
};

export default useBooksList;
