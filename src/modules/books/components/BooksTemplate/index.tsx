import { useRouter } from 'next/router';
import PageContainer from '../../../shared/components/PageContainer';
import Pagination from '../../../shared/components/Pagination';
import useURLPagination from '../../../shared/hooks/useURLPagination';
import useBooksList from '../../hooks/useBooksList';
import BookCard from '../BookCard';
import BookDetailsModal from '../BookDetailsModal';
import Header from '../Header';

const BooksTemplate = () => {
  const { page, toNextPage, toPreviousPage, changePage } = useURLPagination({
    urlParam: 'page',
    initialPage: 1,
  });
  const { data: booksResponse, isLoading } = useBooksList({ page, amount: 12 });
  const router = useRouter();
  const { bookId, ...rest } = router.query;

  const onSelectBook = (id: string) =>
    router.push({
      query: {
        ...router.query,
        bookId: id,
      },
    });

  return (
    <>
      <PageContainer className="bg-[#E5E5E5]">
        <Header />
        <ul className="grid grid-cols-1 gap-4 mt-10 mb-4 sm:grid-cols-2 lg:grid-cols-4">
          {isLoading
            ? new Array(12)
                .fill(undefined)
                .map((_, index) => <BookCard.Skeleton key={index} />)
            : null}
          {booksResponse?.data.data.map((book) => (
            <li key={book.id} className="flex items-stretch w-full">
              <BookCard
                id={book.id}
                authors={book.authors}
                imageSrc={book.imageUrl}
                pages={book.pageCount}
                publishedAt={book.published}
                publisher={book.publisher}
                title={book.title}
                onPress={onSelectBook}
              />
            </li>
          ))}
        </ul>
        <Pagination
          classes={{ root: 'sm:justify-end' }}
          currentPage={page}
          toNextPage={toNextPage}
          toPreviousPage={toPreviousPage}
          totalPages={booksResponse?.data.totalPages ?? 0}
          changePage={changePage}
        />
      </PageContainer>
      <BookDetailsModal
        isOpen={Boolean(bookId)}
        id={bookId as string}
        onClose={() => router.push({ query: rest })}
      />
    </>
  );
};

export default BooksTemplate;
