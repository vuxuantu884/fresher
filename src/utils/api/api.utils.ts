import localStorageHelper, { KeyStorage } from 'utils/localStorage';
import axios, { AxiosRequestConfig, ResponseType, AxiosResponse, AxiosError } from 'axios';
import { DataResponseError } from './api.types';

interface CustomHeaders {
    isAuth: boolean;
}

const REQ_TIMEOUT = 25 * 1000;
export const __DEV__ = !process.env.NEXT_PUBLIC_ENV || process.env.NEXT_PUBLIC_ENV !== 'uat';

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_DOMAIN,
    timeout: REQ_TIMEOUT
});

instance.interceptors.request.use((_config: any) => requestHandler(_config));

const initHeader: CustomHeaders = { isAuth: true };
function getHeader(customHeaders?: CustomHeaders) {
    const header: any = customHeaders || {};
    const initCustomHeader = customHeaders ? customHeaders : initHeader;
    if (!initCustomHeader?.isAuth) {
        delete header.Authorization;
    } else {
        const session = localStorageHelper.getObject(KeyStorage.SESSION);
        header.Authorization = `Bearer ${session?.authenticationToken}`;
    }
    return { ...header };
}

const requestHandler = (request: AxiosRequestConfig) => {
    if (__DEV__) {
        console.log(`Request API: ${request.url}`);
        console.log(`  + Params:     `, request.params);
        console.log(`  + Data:       `, request.data);
    }
    return request;
};

instance.interceptors.response.use(
    (response) => successHandler(response),
    (error) => errorHandler(error)
);

const errorHandler = (error: AxiosError) => {
    const resError: AxiosResponse<DataResponseError> | undefined = error.response;

    const config: any = error.config;
    if (resError?.data?.status === 401 && !config._isRefreshToken) {
        config._isRefreshToken = true;
    }
    if (__DEV__) {
        console.log(`Response API:`, resError?.data);
    }
    return Promise.reject({ ...error });
};

const successHandler = async (response: AxiosResponse) => {
    if (__DEV__) {
        console.log(`Response API: ${response.config.url}`, response.data);
    }
    const data: any = response.data;
    if (!data || data.status === 'INVALID_TOKEN') {
        // showAlertError('login_expired');
        return;
    }
    return data;
};

async function fetch<ReqType, ResType>(
    url: string,
    params?: ReqType,
    customHeaders?: CustomHeaders,
    responseType?: ResponseType
): Promise<ResType> {
    const headers = getHeader(customHeaders);
    return instance.get(url, { params, headers, responseType });
}

async function post<ReqType, ResType>(
    url: string,
    data?: ReqType,
    customHeaders?: CustomHeaders
): Promise<ResType> {
    const headers = getHeader(customHeaders);
    return instance.post(url, { ...data }, { headers });
}

async function postForm<ReqType, ResType>(
    url: string,
    data?: ReqType,
    customHeaders?: CustomHeaders
): Promise<ResType> {
    const headers = getHeader(customHeaders);
    return instance.post(url, data, { headers });
}

async function put<ReqType, ResType>(
    url: string,
    data?: ReqType,
    customHeaders?: CustomHeaders
): Promise<ResType> {
    const headers = getHeader(customHeaders);
    return instance.put(url, { ...data }, { headers });
}

async function remove<ReqType, ResType>(
    url: string,
    data?: ReqType,
    customHeaders?: CustomHeaders
): Promise<ResType> {
    const headers = getHeader(customHeaders);
    return instance.delete(url, { data: { ...data }, headers: { ...headers } });
}

const ApiUtils = { fetch, post, put, postForm, remove };
export default ApiUtils;
