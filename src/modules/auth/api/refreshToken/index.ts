import { getPublicAPI } from '../../../shared/config/api';
import { ApiRoutes } from '../../../shared/enums/ApiRoutes';

export const refreshAccessToken = async (refreshToken: string) => {
  const response = await getPublicAPI().post(ApiRoutes.REFRESH_TOKEN, {
    refreshToken,
  });
  return {
    accessToken: response.headers.authorization as string,
    refreshToken: response.headers['refresh-token'] as string,
  };
};
