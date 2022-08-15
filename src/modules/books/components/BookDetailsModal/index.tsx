/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import ModalBase from '../../../shared/components/ModalBase';
import useBookDetails from '../../hooks/useBookDetails';
import DefaultBookCover from '../../assets/defaultBookCover.png';

interface Props {
  isOpen: boolean;
  id: string;
  onClose: () => void;
}

interface InformationItemProps {
  label: string;
  value: string;
}

const InformationItem = ({ label, value }: InformationItemProps) => {
  return (
    <li>
      <p className="flex justify-between">
        <span className="text-xs text-[#333333] font-medium">{label}</span>
        <span className="text-[#999999] text-xs leading-5">{value}</span>
      </p>
    </li>
  );
};

const BookDetailsModal = ({ isOpen, id, onClose }: Props) => {
  const { data } = useBookDetails(id, { active: isOpen });
  const router = useRouter();

  const onCloseModal = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { bookId: _, ...rest } = router.query;
    router.push({
      query: rest,
    });
    onClose();
  };

  return data ? (
    <ModalBase
      isOpen={isOpen}
      title=""
      onClose={onCloseModal}
      classes={{
        card: 'rounded-[4px] bg-white px-6 pt-6 pb-8 overflow-y-auto lg:overflow-y-none lg:max-h-[608px] lg:max-w-[769px]',
      }}
    >
      <div className="flex flex-col lg:flex-row gap-x-12">
        <img
          src={data.data.imageUrl ?? DefaultBookCover.src}
          width={240}
          height={351}
          alt=""
          className=" mx-auto mb-6 drop-shadow-[0px_11.9px_17.85px_rgba(0,0,0,0.3)] w-[240px] h-[351px] lg:w-[349px] lg:h-[512.29px]"
        />

        <div className="lg:overflow-y-auto lg:h-full">
          <div className="mb-8">
            <h1 className="font-medium text-[28px] leading-10 text-[#333333]">
              {data.data.title}
            </h1>
            <h2 className="text-xs leading-5 text-[#AB2680]">
              {data.data.authors.join(', ')}
            </h2>
          </div>

          <div className="mb-8">
            <h3 className="mb-7 text-xs uppercase text-[#333333] font-medium">
              Informações
            </h3>
            <ul className="flex flex-col">
              <InformationItem
                label="Páginas"
                value={`${data.data.pageCount} páginas`}
              />
              <InformationItem label="Editora" value={data.data.publisher} />
              <InformationItem
                label="Publicação"
                value={data.data.published.toString()}
              />
              <InformationItem label="Idioma" value={data.data.language} />
              <InformationItem
                label="Título Original"
                value={data.data.title}
              />
              <InformationItem label="ISBN-10" value={data.data.isbn10} />
              <InformationItem label="ISBN-13" value={data.data.isbn13} />
            </ul>
          </div>

          <div>
            <h3 className="mb-7 text-xs uppercase text-[#333333] font-medium">
              Resenha da editora
            </h3>
            <p className="text-[#999999] text-xs leading-5">
              {data.data.description}
            </p>
          </div>
        </div>
      </div>
    </ModalBase>
  ) : null;
};

export default BookDetailsModal;
