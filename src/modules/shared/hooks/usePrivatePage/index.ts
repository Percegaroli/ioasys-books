import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { AppRoutes } from '../../enums/AppRoutes';

const usePrivatePage = () => {
  const { status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push(AppRoutes.SIGN_IN);
    }
  }, [status]);

  return status !== 'authenticated';
};

export default usePrivatePage;
