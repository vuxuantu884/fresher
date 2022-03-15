import { LoginInput } from 'types/auth.types';
import { ResponseBase } from 'utils/api/api.types';
import ApiUtils from 'utils/api/api.utils';

const apiName = {
  login: 'admin/signin'
};

export const apiLogin = async (body: LoginInput): Promise<any> => {
  const res = await ApiUtils.post<LoginInput, ResponseBase<any>>(apiName.login, body);

  return res?.data;
};
