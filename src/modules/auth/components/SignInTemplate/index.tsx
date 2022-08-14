import { FormProvider, useForm } from 'react-hook-form';
import AuthInput from '../AuthInput';
import PasswordInput from '../PasswordInput';
import Logo from '../../../shared/assets/images/Logo.svg';
import useSignIn from '../../hooks/useSignIn';

interface Form {
  email: string;
  password: string;
}

const SignInTemplate = () => {
  const methods = useForm<Form>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { mutate: signIn, isLoading, isError } = useSignIn();

  const onSubmit = (data: Form) => {
    signIn(data);
  };

  return (
    <div className="flex flex-1 items-center justify-center px-4 min-h-screen bg-[#c64772]">
      <FormProvider {...methods}>
        <form className="w-full" onSubmit={methods.handleSubmit(onSubmit)}>
          <h1 className="flex items-center gap-x-[16.6px] font-light text-[28px] leading-10 text-white mb-[50px]">
            <Logo className="fill-white w-[104.4px] h-9" />
            Books
          </h1>

          <div className="flex flex-col gap-y-6">
            <AuthInput name="email" label="Email" />
            <PasswordInput
              name="password"
              label="Senha"
              isLoading={isLoading}
            />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default SignInTemplate;
