import classNames from 'classnames';
import { PropsWithChildren } from 'react';

interface Props {
  className?: string;
}

const PageContainer = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <div
      className={classNames(
        className,
        'px-4 pt-[42px] pb-4 min-h-screen sm:px-10'
      )}
    >
      <div className="mx-auto sm:max-w-[1130px]">{children}</div>
    </div>
  );
};

export default PageContainer;
