export enum ResponseCode {
    SUCCESS = 'SUCCESS',
}

export interface ResponseBase<T> {
    data: T;
    message?: ResponseCode;
    totalItems: number,
    totalPages: number,

    status: string;
    item: T;
    items: T;
    total: number
}


export interface DataResponseError {
    error: string;
    message: string;
    status: number;
    path: string;
}