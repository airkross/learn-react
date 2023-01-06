import Axios, { AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios'

export type ApiConstructor<T> = new (axios: AxiosInstance) => T

function createApi<T>(Api: ApiConstructor<T>, baseURL: string): T {
    const axios = Axios.create({
        timeout: 59000,
        baseURL,
    })

    axios.interceptors.request.use(async (config: AxiosRequestConfig) => {
        return config
    }, (error: AxiosError) => {
        return Promise.reject(error)
    })

    axios.interceptors.response.use((response) => response, async (error) => {
        if (error.code === 'ECONNABORTED') {
            alert('Время ожидания ответа от сервера истекло')
        } else {
            return Promise.reject(error)
        }
    })

    return new Api(axios)
}

export { createApi }