import axios, { AxiosInstance } from 'axios'

import { Location } from 'types'

import {
  requestInterceptor,
  requestErrorInterceptor,
  responseInterceptor,
  responseErrorInterceptor
} from './interceptors'

// Fix AxiosResponse when using response interceptors
declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<T> {}
}

class httpClient {
  constructor(private readonly client: AxiosInstance) {
    client.interceptors.request.use(requestInterceptor, requestErrorInterceptor)
    client.interceptors.response.use(responseInterceptor, responseErrorInterceptor)
  }

  async getData() {
    return this.client.get<Location[]>('/')
  }
}

export default new httpClient(
  axios.create({
    baseURL: 'https://data.lacity.org/resource/6rrh-rzua.json'
  })
)
