import classNames from 'classnames';
import { PropsWithChildren, useRef } from 'react';
import {
  FocusScope,
  OverlayContainer,
  useDialog,
  useModal,
  useOverlay,
  usePreventScroll,
} from 'react-aria';
import Button from '../Button';
import CloseIcon from '../../assets/icons/closeIconOutlined.svg';

interface ModalClasses {
  overlay?: string;
  card?: string;
}

interface Props {
  classes?: ModalClasses;
  isOpen: boolean;
  title: string;
  onClose: () => void;
}

const ModalBase = ({
  classes = {},
  children,
  isOpen,
  onClose,
  title,
}: PropsWithChildren<Props>) => {
  const isDisabled = !isOpen;
  usePreventScroll({ isDisabled });
  const modalRef = useRef<HTMLDivElement | null>(null);
  const { overlayProps, underlayProps } = useOverlay(
    { onClose, isDismissable: true, isOpen },
    modalRef
  );
  const { modalProps } = useModal({ isDisabled });
  const {} = useDialog({ 'aria-label': title }, modalRef);

  return isOpen ? (
    <OverlayContainer>
      <div
        className={classNames(
          'fixed px-4 z-20 top-0 left-0 flex items-center justify-center bg-black bg-opacity-40 w-full h-screen',
          classes.overlay ?? ''
        )}
        {...underlayProps}
      >
        <FocusScope contain restoreFocus autoFocus>
          <Button
            onPress={onClose}
            className="absolute right-4 top-4 bg-transparent bg-white rounded-full flex items-center justify-center border border-[rgba(51,51,51,0.2)] w-8 h-8"
          >
            <CloseIcon className="stroke-black" />
          </Button>
          <div
            className={classNames(
              'bg-white max-h-[calc(100vh-80px)] relative top-5',
              classes.card ?? ''
            )}
            {...overlayProps}
            {...modalProps}
            ref={modalRef}
          >
            {children}
          </div>
        </FocusScope>
      </div>
    </OverlayContainer>
  ) : null;
};

export default ModalBase;
