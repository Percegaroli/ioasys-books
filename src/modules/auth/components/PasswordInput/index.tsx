import Button from '../../../shared/components/Button';
import AuthInput from '../AuthInput';

interface Props {
  name: string;
  label: string;
  isLoading: boolean;
}

const PasswordInput = ({ isLoading, label, name }: Props) => {
  return (
    <div className="relative">
      <AuthInput
        label={label}
        name={name}
        type="password"
        classes={{
          input: 'pr-[110px] shadow-fill-[#87304D]',
        }}
      />
      <Button
        isDisabled={isLoading}
        className="absolute right-4 top-3 bg-white rounded-[44px] px-5 py-2 text-base leading-5 text-[#B22E6F] font-medium"
        type="submit"
      >
        Entrar
      </Button>
    </div>
  );
};

export default PasswordInput;
