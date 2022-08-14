import { FormProvider, useForm } from 'react-hook-form';
import AuthInput from '../AuthInput';
import PasswordInput from '../PasswordInput';
import Logo from '../../../shared/assets/images/Logo.svg';
import useSignIn from '../../hooks/useSignIn';
import BGMobile from '../../assets/images/bg-mobile.png';
import BGDesktop from '../../assets/images/bg-desktop.png';
import classNames from 'classnames';
import { useBreakpoint } from '../../../shared/hooks/useBreakpoints';
import PageContainer from '../../../shared/components/PageContainer';
import AuthErrorPopover from '../AuthErrorPopover';
import { useEffect, useRef } from 'react';

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
  const isDesktop = useBreakpoint('lg');
  const popoverContainerRef = useRef<HTMLDivElement | null>(null);

  const onSubmit = (data: Form) => {
    signIn(data);
  };

  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, []);

  return (
    <div
      className={classNames(
        'flex flex-1 items-center justify-center min-h-screen bg-cover bg-no-repeat'
      )}
      style={{
        backgroundImage: `url(${isDesktop ? BGDesktop.src : BGMobile.src})`,
      }}
    >
      <PageContainer
        className="flex-1 flex"
        classes={{
          contentContainer: 'flex-1 flex',
        }}
      >
        <FormProvider {...methods}>
          <form
            className="w-full lg:max-w-[368px] flex flex-col justify-center"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <h1 className="flex items-center gap-x-[16.6px] font-light text-[28px] leading-10 text-white mb-[50px]">
              <Logo className="fill-white w-[104.4px] h-9" />
              Books
            </h1>

            <div className="flex flex-col gap-y-6">
              <AuthInput name="email" label="Email" />
              <div className="relative" ref={popoverContainerRef}>
                <PasswordInput
                  name="password"
                  label="Senha"
                  isLoading={isLoading}
                />
                <AuthErrorPopover isError={isError} />
              </div>
            </div>
          </form>
        </FormProvider>
      </PageContainer>
    </div>
  );
};

export default SignInTemplate;
