import type { NextPage } from 'next';
import BooksTemplate from '../modules/books/components/BooksTemplate';
import usePrivatePage from '../modules/shared/hooks/usePrivatePage';

const Home: NextPage = () => {
  const isLoading = usePrivatePage();
  return isLoading ? null : <BooksTemplate />;
};

export default Home;
