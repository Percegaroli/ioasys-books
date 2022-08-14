import { User } from 'next-auth';

export interface SessionUser extends User {
  accessToken: string;
  refreshToken: string;
  gender: string;
}
