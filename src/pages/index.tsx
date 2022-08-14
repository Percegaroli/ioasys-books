import type { NextPage } from 'next';
import { signOut, useSession } from 'next-auth/react';
import usePrivatePage from '../modules/shared/hooks/usePrivatePage';
import useSessionUser from '../modules/shared/hooks/useSessionUser';

const Home: NextPage = () => {
  const isLoading = usePrivatePage();
  const user = useSessionUser();
  return isLoading ? null : (
    <div>
      <div className="text-lg text-red-600">Olá mundo com tailwind</div>
      <button onClick={() => signOut()}>Deslogar</button>
    </div>
  );
};

export default Home;
