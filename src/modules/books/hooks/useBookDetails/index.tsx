import { useQuery } from '@tanstack/react-query';
import { ApiRoutes } from '../../../shared/enums/ApiRoutes';
import useAxios from '../../../shared/hooks/useAxios';
import { BookDTO } from '../useBooksList';

const useBookDetails = (id: string) => {
  const axios = useAxios();
  return useQuery([ApiRoutes.BOOK_BY_ID, id], () =>
    axios.get<BookDTO>(ApiRoutes.BOOK_BY_ID.replace('{id}', id))
  );
};

export default useBookDetails;
