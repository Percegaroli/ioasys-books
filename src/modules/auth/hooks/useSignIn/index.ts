import { useMutation } from '@tanstack/react-query';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { AppRoutes } from '../../../shared/enums/AppRoutes';
import { SignInPayload } from '../../api/signIn/interfaces';

const useSignIn = () => {
  const router = useRouter();
  return useMutation(
    async (payload: SignInPayload) => {
      const response = await signIn('credentials', {
        callbackUrl: undefined,
        redirect: false,
        ...payload,
      });
      if (response?.error) {
        throw new Error('Email e/ou senha incorretos');
      }
      return response;
    },
    {
      onSuccess: () => {
        router.push(AppRoutes.HOME);
      },
    }
  );
};

export default useSignIn;
