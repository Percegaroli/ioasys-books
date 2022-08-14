import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import signIn from '../../../modules/auth/api/signIn';
import decode from 'jwt-decode';
import { isBefore } from 'date-fns';
import { AccessToken } from '../../../modules/auth/interfaces/AccessToken';
import { SessionUser } from '../../../modules/shared/interfaces/SessionUser';
import { refreshAccessToken } from '../../../modules/auth/api/refreshToken';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { type: 'text' },
        password: { type: 'password' },
      },
      authorize: async (payload) => {
        const response = await signIn({
          email: payload?.email ?? '',
          password: payload?.password ?? '',
        });
        const accessToken = response.headers.authorization ?? '';
        const refreshToken = response.headers['refresh-token'];
        const user: SessionUser = {
          id: response.data.id,
          email: payload?.email ?? '',
          name: response.data.name,
          gender: response.data.gender,
          refreshToken,
          accessToken,
        };
        return user;
      },
    }),
  ],
  pages: {
    signIn: '/auth/sign-in',
  },
  callbacks: {
    session: ({ session, token }) => {
      console.log(token);
      console.log('session:');
      console.log(session);
      return {
        ...session,
        user: {
          ...session.user,
          gender: token.gender,
          refreshToken: token.refreshToken,
          accessToken: token.accessToken,
        },
      };
    },
    jwt: async ({ token, account, user }) => {
      // after initial sign in
      if (account && user?.accessToken) {
        console.log('aqui');
        return {
          ...token,
          gender: user?.gender,
          refreshToken: user?.refreshToken,
          accessToken: user?.accessToken,
        };
      }
      const decodedJwt = decode<AccessToken>(token?.accessToken as string);
      if (isBefore(new Date(decodedJwt.vld), new Date())) {
        const { accessToken, refreshToken } = await refreshAccessToken(
          token?.refreshToken as string
        );
        return {
          ...token,
          refreshToken,
          accessToken,
        };
      }
      return token;
    },
  },
});
