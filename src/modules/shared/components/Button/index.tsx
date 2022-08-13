import { ButtonHTMLAttributes, DetailedHTMLProps, useRef } from 'react';
import { AriaButtonProps, useButton } from 'react-aria';

interface Props extends AriaButtonProps {
  className?: string;
}

const Button = ({ className, ...rest }: Props) => {
  const ref = useRef(null);
  const { buttonProps } = useButton(rest, ref);

  return (
    <button {...buttonProps} ref={ref} className={className}>
      {rest.children}
    </button>
  );
};

export default Button;
