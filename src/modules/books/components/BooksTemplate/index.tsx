import PageContainer from '../../../shared/components/PageContainer';
import Pagination from '../../../shared/components/Pagination';
import usePagination from '../../../shared/hooks/usePagination';
import useBooksList from '../../hooks/useBooksList';
import BookCard from '../BookCard';
import Header from '../Header';

const BooksTemplate = () => {
  const { page, toNextPage, toPreviousPage } = usePagination({
    urlParam: 'page',
    initialPage: 1,
  });
  const { data: booksResponse } = useBooksList({ page, amount: 10 });

  return (
    <PageContainer className="bg-[#E5E5E5]">
      <Header />
      <ul className="grid grid-cols-1 gap-y-4 mt-10 mb-4">
        {booksResponse?.data.data.map((book) => (
          <li key={book.id}>
            <BookCard
              id={book.id}
              authors={book.authors}
              imageSrc={book.imageUrl}
              pages={book.pageCount}
              publishedAt={book.published}
              publisher={book.publisher}
              title={book.title}
            />
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={page}
        toNextPage={toNextPage}
        toPreviousPage={toPreviousPage}
        totalPages={booksResponse?.data.totalPages ?? 0}
      />
    </PageContainer>
  );
};

export default BooksTemplate;
