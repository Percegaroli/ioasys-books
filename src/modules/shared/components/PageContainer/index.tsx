import classNames from 'classnames';
import { PropsWithChildren } from 'react';

interface Props {
  className?: string;
  classes?: {
    pageContainer?: string;
    contentContainer?: string;
  };
}

const PageContainer = ({
  children,
  className,
  classes = {},
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={classNames(
        className,
        'px-4 pt-[42px] pb-4 min-h-screen sm:px-10',
        classes.pageContainer ?? ''
      )}
    >
      <div
        className={classNames(
          'mx-auto sm:max-w-[1136px]',
          classes.contentContainer ?? ''
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
