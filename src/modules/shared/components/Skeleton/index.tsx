import classNames from 'classnames';

interface Props {
  className?: string;
}

const Skeleton = ({ className }: Props) => {
  return (
    <div
      className={classNames(
        className,
        'animate-pulse bg-[#E6E6E6] duration-100'
      )}
    />
  );
};

export default Skeleton;
