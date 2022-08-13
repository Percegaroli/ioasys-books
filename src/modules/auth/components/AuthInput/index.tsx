import classNames from 'classnames';
import { useRef } from 'react';
import { AriaTextFieldOptions, useTextField } from 'react-aria';
import { useFormContext } from 'react-hook-form';

interface AuthInputClasses {
  container?: string;
  label?: string;
  input?: string;
}

interface Props extends AriaTextFieldOptions<'input'> {
  name: string;
  classes?: AuthInputClasses;
}

const AuthInput = (props: Props) => {
  const { classes = {}, label, type, name } = props;
  const ariaRef = useRef<HTMLInputElement | null>(null);
  const { register } = useFormContext();
  let { labelProps, inputProps } = useTextField(props, ariaRef);
  const { ref: hookFormRef, ...rest } = register(name);

  return (
    <div
      className={classNames(
        'bg-black bg-opacity-[0.32] backdrop-blur-[2px] flex flex-col gap-y-1 rounded-[4px] py-2 pl-[13px] pr-4',
        classes.container ?? ''
      )}
    >
      <label
        {...labelProps}
        className={classNames(
          'text-xs leading-4 text-white opacity-50',
          classes.label ?? ''
        )}
      >
        {label}
      </label>
      <input
        {...inputProps}
        {...rest}
        ref={(e) => {
          hookFormRef(e);
          ariaRef.current = e;
        }}
        type={type}
        className={classNames(
          'text-base leading-6 text-white bg-transparent outline-none',
          classes.input ?? ''
        )}
      />
    </div>
  );
};

export default AuthInput;
