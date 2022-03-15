import { Media } from 'types/common.types';
import ApiUtils from 'utils/api/api.utils';
import { ResponseBase } from './api/api.types';

export const IMAGE_UPLOAD = '/medias/upload-cloud';

export const onUploadImage = (file: any) => {
    return ApiUtils.postForm<any, ResponseBase<Media>>(IMAGE_UPLOAD, file);
};
