import React, { useEffect, useState, useCallback } from 'react'

import api from 'api'
import Layout from 'components/Layout'
import { Location } from 'types'

import Home from './Home'

const HomeContainer = () => {
  const [loading, setLoading] = useState(false)
  const [locations, setLocations] = useState<Location[]>([])

  const getLocations = useCallback(async () => {
    setLoading(true)

    const locations = await api.getData()
    setLocations(locations)

    setLoading(false)
  }, [])

  useEffect(() => {
    getLocations()
  }, [getLocations])

  return (
    <Layout loading={loading}>
      <Home locations={locations} />
    </Layout>
  )
}

export default HomeContainer
