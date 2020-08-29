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
    const businesses = await this.client.get<Business[]>('/')

    const start = page * limit
    const end = page * limit + limit

    const count = businesses.length
    const rows = businesses.slice(start, end)

    return { count, rows }
  }

  async getOldestBusiness() {
    const businesses = await this.client.get<Business[]>('/')

    return businesses[0]
  }

  async getBusinessWithMostLocations() {
    const businesses = await this.client.get<Business[]>('/')

    return businesses.slice(0, 5)
  }
}

export default new httpClient(
  axios.create({
    baseURL: 'https://data.lacity.org/resource/6rrh-rzua.json'
  })
)
