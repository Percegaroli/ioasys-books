import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import {
  FocusScope,
  mergeProps,
  useDialog,
  useModal,
  useOverlay,
} from 'react-aria';

interface Props {
  isError: boolean;
  className?: string;
}

const AuthErrorPopover = ({ isError, className }: Props) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(isError);
  const { modalProps } = useModal({ isDisabled: !isOpen });
  const { dialogProps } = useDialog({}, ref);
  const { overlayProps } = useOverlay(
    {
      isOpen,
      isDismissable: true,
      onClose: () => setIsOpen(false),
    },
    ref
  );

  useEffect(() => {
    setIsOpen(isError);
  }, [isError]);

  return (
    <FocusScope restoreFocus>
      <div
        {...mergeProps(overlayProps, modalProps, dialogProps)}
        ref={ref}
        className={classNames(
          'bg-white bg-opacity-40 absolute left-0 top-[84px] rounded-[4px] outline-none p-4 text-white text-base leading-4 font-bold transition-opacity duration-200',
          'before:content-[""] before:border-[8px] before:border-transparent before:border-b-[rgba(255,255,255,0.4)] before:absolute before:left-[17px] before:-top-4 before:',
          isOpen ? 'opacity-100' : 'opacity-0',
          className ?? ''
        )}
      >
        Email e/ou senha incorretos.
      </div>
    </FocusScope>
  );
};

export default AuthErrorPopover;
