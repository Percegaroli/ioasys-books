import { useQuery } from '@tanstack/react-query';
import { ApiRoutes } from '../../../shared/enums/ApiRoutes';
import useAxios from '../../../shared/hooks/useAxios';
import { BookDTO } from '../useBooksList';

interface Config {
  active?: boolean;
}

const useBookDetails = (id: string, config: Config = {}) => {
  const axios = useAxios();
  const { active = true } = config;
  return useQuery(
    [ApiRoutes.BOOK_BY_ID, id],
    () => axios.get<BookDTO>(ApiRoutes.BOOK_BY_ID.replace('{id}', id)),
    {
      enabled: active,
    }
  );
};

export default useBookDetails;
