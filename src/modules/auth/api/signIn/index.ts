import { getPublicAPI } from '../../../shared/config/api';
import { SignInPayload, SignInResponseDTO } from './interfaces';

const signIn = (payload: SignInPayload) => {
  return getPublicAPI().post<SignInResponseDTO>('auth/sign-in', payload);
};

export default signIn;
