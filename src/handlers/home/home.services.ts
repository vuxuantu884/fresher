import { ResponseBase } from 'utils/api/api.types';
import ApiUtils from 'utils/api/api.utils';

const apiName = {
  categories: 'categories'
};

export const apiFetchCategories = async (): Promise<any> => {
  const res = await ApiUtils.fetch<undefined, ResponseBase<any>>(apiName.categories);

  return res?.data || [];
};
