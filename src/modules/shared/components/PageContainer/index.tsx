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
        'mx-auto px-4 pt-[42px] pb-4 min-h-screen'
      )}
    >
      {children}
    </div>
  );
};

export default PageContainer;
