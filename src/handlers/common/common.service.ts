import { Media } from 'types/common.types';
import { ResponseBase } from 'utils/api/api.types';
import ApiUtils from 'utils/api/api.utils';

export const IMAGE_UPLOAD = '/medias/upload-cloud';

export const onUploadImage = (file: any) => {
    return ApiUtils.postForm<any, ResponseBase<Media>>(IMAGE_UPLOAD, file);
};
