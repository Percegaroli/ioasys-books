/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames';
import { useMemo, useRef } from 'react';
import { useButton } from 'react-aria';
import DefaultBookCover from '../../assets/defaultBookCover.png';
import BookCardSkeleton from './Skeleton';

interface Props {
  id: string;
  imageSrc?: string;
  title: string;
  authors: Array<string>;
  pages: number;
  publisher: string;
  publishedAt: number;
  onPress: (id: string) => void;
}

const BookCard = ({
  authors,
  imageSrc,
  pages,
  publishedAt,
  publisher,
  title,
  id,
  onPress,
}: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const displayedAuthors = useMemo(() => {
    return authors.slice(0, 2);
  }, [authors]);

  const { buttonProps } = useButton(
    {
      elementType: 'div',
      onPress: () => onPress(id),
    },
    ref
  );

  return (
    <>
      <div
        {...buttonProps}
        ref={ref}
        className={classNames(
          'w-full bg-white rounded-[4px] shadow-[0px_6px_24px_rgba(84,16,95,0.13)] p-4 hover:shadow-[0px_16px_80px_rgba(84,16,95,0.32)] hover:cursor-pointer outline-none focus:shadow-[0px_16px_80px_rgba(84,16,95,0.32)]'
        )}
      >
        <div className="flex items-center gap-x-4">
          <img
            src={imageSrc ?? DefaultBookCover.src}
            width={81}
            height={122}
            alt=""
          />
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
              <p>Publicado em {publishedAt}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

BookCard.Skeleton = BookCardSkeleton;

export default BookCard;
