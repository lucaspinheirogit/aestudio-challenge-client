import axios, { AxiosInstance } from 'axios'

import { Business, Pagination } from 'types'

import {
  requestInterceptor,
  requestErrorInterceptor,
  responseInterceptor,
  responseErrorInterceptor
} from './interceptors'

// Fix AxiosResponse types when using response interceptors
declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<T> {}
}

class httpClient {
  constructor(private readonly client: AxiosInstance) {
    client.interceptors.request.use(requestInterceptor, requestErrorInterceptor)
    client.interceptors.response.use(responseInterceptor, responseErrorInterceptor)
  }

  async getBusinesses({ page, limit }: Pagination) {
    return this.client.get<{ count: number; rows: Business[] }>('/businesses', {
      params: { page, limit }
    })
  }

  async getOldestBusiness() {
    return this.client.get<Business>('/businesses/oldest')
  }

  async getBusinessWithMostLocations() {
    return this.client.get<Business[]>('/businesses/most-locations')
  }
}

export default new httpClient(
  axios.create({
    baseURL: 'http://localhost:5000'
  })
)
