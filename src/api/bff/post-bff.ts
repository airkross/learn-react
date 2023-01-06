import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from 'axios'

export enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded",
}

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
    path: string;
    type?: ContentType;
    query?: QueryParamsType;
    format?: ResponseType;
    body?: unknown;
}

// Исключил из парамсов, чтобы была возможность переопреопределять
export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>

export class HttpClient {
    private instance: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.instance = axios;
    }

    private mergeRequestParams(params1: AxiosRequestConfig): AxiosRequestConfig {
        return {
            ...this.instance.defaults,
            ...params1,
            headers: {
                ...(this.instance.defaults.headers || {}),
                ...(params1.headers || {}),
            } as AxiosRequestConfig['headers'],
        };
    }

    private createFormData(input: Record<string, unknown>): FormData {
        return Object.keys(input || {}).reduce((formData, key) => {
            const property = input[key];

            if (Array.isArray(property)) {
                property.forEach((item) => {
                    formData.append(key, item as Blob | string);
                });

                return formData;
            }

            let value: string | Blob | File;
            if (property instanceof Blob || property instanceof File) {
                value = property;
            } else if (typeof property === "object") {
                value = JSON.stringify(property);
            } else {
                value = `${property}`;
            }

            formData.append(key, value as Blob | string);

            return formData;
        }, new FormData());
    }

    public request = async <T = any, _E = any>({
        path,
        type,
        query,
        format = "json",
        body,
        ...params
    }: FullRequestParams): Promise<AxiosResponse<T, _E>> => {
        const requestParams = this.mergeRequestParams(params);

        if (type === ContentType.FormData && body && typeof body === "object") {
            body = this.createFormData(body as Record<string, unknown>);
        }
        
        return this.instance.request({
            ...requestParams,
            headers: {
                ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
                ...(requestParams.headers || {}),
            } as AxiosRequestConfig['headers'],
            params: query,
            responseType: format,
            data: body,
            url: path,
        })
    };
}

export class Api {
    http: HttpClient;
    constructor(private axios: AxiosInstance) {
        this.http = new HttpClient(axios)
    }

    getPosts(params: RequestParams = {}) {
        return this.http.request<PostListItemsType, IStatus>({
            path: '/posts',
            method: 'GET',
            format: 'json',
            ...params, 
        })
    }
}

export type PostListItemsType = Array<IPostItem>

export interface IPostItem {
    id: number
    title: string
    body: string
}
  
export interface IStatus {
    code?: number
    message?: string
}