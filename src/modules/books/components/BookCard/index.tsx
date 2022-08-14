import classNames from 'classnames';
import { getYear } from 'date-fns';
import { useMemo, useRef, useState } from 'react';
import { useButton } from 'react-aria';
import DefaultBookCover from '../../assets/defaultBookCover.png';
import BookDetailsModal from '../BookDetailsModal';

interface Props {
  id: string;
  imageSrc?: string;
  title: string;
  authors: Array<string>;
  pages: number;
  publisher: string;
  publishedAt: number;
}

const BookCard = ({
  authors,
  imageSrc,
  pages,
  publishedAt,
  publisher,
  title,
  id,
}: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isShowingModal, setIsShowingModal] = useState(false);
  const displayedAuthors = useMemo(() => {
    return authors.slice(0, 2);
  }, [authors]);

  const { buttonProps } = useButton(
    {
      elementType: 'div',
      onPress: () => {
        setIsShowingModal(true);
      },
    },
    ref
  );

  return (
    <>
      <div
        {...buttonProps}
        ref={ref}
        className={classNames(
          'bg-white rounded-[4px] shadow-[0px_6px_24px_rgba(84,16,95,0.13)] p-4 hover:shadow-[0px_16px_80px_rgba(84,16,95,0.32)] hover:cursor-pointer outline-none focus:shadow-[0px_16px_80px_rgba(84,16,95,0.32)]'
        )}
      >
        <div className="flex items-center gap-x-4">
          <img src={imageSrc ?? DefaultBookCover.src} width={81} height={122} />
          <div className="flex flex-col justify-between gap-y-2">
            <div>
              <h2 className="text-sm text-[#333333] font-medium">{title}</h2>
              <ul className="flex flex-col leading-5">
                {displayedAuthors.map((author) => (
                  <li key={author}>
                    <h3 className="text-xs text-[#AB2680]">{author}</h3>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-y-2 text-xs text-[#999999] leading-3">
              <p>{pages} páginas</p>
              <p>Editora {publisher}</p>
              <p>Publicado em {getYear(new Date(publishedAt))}</p>
            </div>
          </div>
        </div>
      </div>
      <BookDetailsModal
        isOpen={isShowingModal}
        onClose={() => setIsShowingModal(false)}
        id={id}
      />
    </>
  );
};

export default BookCard;
