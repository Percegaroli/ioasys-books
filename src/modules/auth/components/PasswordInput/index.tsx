import Button from '../../../shared/components/Button';
import AuthInput from '../AuthInput';

interface Props {
  name: string;
  label: string;
}

const PasswordInput = (props: Props) => {
  return (
    <div className="relative">
      <AuthInput {...props} type="password" />
      <Button
        className="absolute right-4 top-3 bg-white rounded-[44px] px-5 py-2 text-base leading-5 text-[#B22E6F] font-medium"
        type="submit"
      >
        Entrar
      </Button>
    </div>
  );
};

export default PasswordInput;
