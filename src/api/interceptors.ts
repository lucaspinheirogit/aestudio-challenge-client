import { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios'
import { toast } from 'react-toastify'

export const responseInterceptor = (response: AxiosResponse) => response?.data
export const responseErrorInterceptor = (error: AxiosError) => toast.error(error?.message)

export const requestInterceptor = (config: AxiosRequestConfig) => config
export const requestErrorInterceptor = (error: AxiosError) => Promise.reject(error)
