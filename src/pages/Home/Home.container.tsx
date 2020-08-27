import React, { useEffect, useState, useCallback } from 'react'

import api from 'api'
import Layout from 'components/Layout'
import { Business, Pagination } from 'types'

import Home from './Home'

const HomeContainer = () => {
  const [loading, setLoading] = useState(false)
  const [businesses, setBusiness] = useState<Business[]>([])

  const [pagination, setPagination] = useState<Pagination>({
    page: 0,
    limit: 5,
    count: 0
  })

  const getBusinesses = useCallback(async () => {
    setLoading(true)

    const { count, rows } = await api.getBusinesses(pagination)
    setBusiness(rows)
    setPagination(pagination => ({ ...pagination, count }))

    setLoading(false)
  }, [pagination.page])

  useEffect(() => {
    getBusinesses()
  }, [getBusinesses, pagination.page])

  return (
    <Layout loading={loading}>
      <Home businesses={businesses} pagination={pagination} setPagination={setPagination} />
    </Layout>
  )
}

export default HomeContainer
