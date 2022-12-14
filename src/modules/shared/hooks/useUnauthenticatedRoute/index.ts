import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { AppRoutes } from '../../enums/AppRoutes';

const useUnauthenticatedRoute = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push(AppRoutes.HOME);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return status !== 'unauthenticated';
};

export default useUnauthenticatedRoute;
