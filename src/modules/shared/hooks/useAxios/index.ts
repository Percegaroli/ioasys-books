import { getPrivateAPI, getPublicAPI } from '../../config/api';
import useSessionUser from '../useSessionUser';

const useAxios = () => {
  const user = useSessionUser();
  return user?.accessToken ? getPrivateAPI(user.accessToken) : getPublicAPI();
};

export default useAxios;
