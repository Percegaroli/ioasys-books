import { useSession } from 'next-auth/react';
import { SessionUser } from '../../interfaces/SessionUser';

const useSessionUser = () => {
  const { data } = useSession();
  return data?.user as SessionUser | null;
};

export default useSessionUser;
