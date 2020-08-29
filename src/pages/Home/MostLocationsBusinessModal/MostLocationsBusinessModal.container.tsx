import React, { useEffect, useState, useCallback } from 'react'

import api from 'api'
import { ModalProps } from 'components/Modal'
import { Business } from 'types'

import MostLocationsBusinessModal from './MostLocationsBusinessModal'

const MostLocationsBusinessModalContainer: React.FC<ModalProps> = ({
  open,
  onClose
}: ModalProps) => {
  const [loading, setLoading] = useState(true)
  const [businesses, setBusinesses] = useState<Business[] | null>(null)

  const getBusinessWithMostLocations = useCallback(async () => {
    setLoading(true)

    const businesses = await api.getBusinessWithMostLocations()
    setBusinesses(businesses)

    setLoading(false)
  }, [])

  useEffect(() => {
    getBusinessWithMostLocations()
  }, [getBusinessWithMostLocations])

  return (
    <MostLocationsBusinessModal
      open={open}
      loading={loading}
      onClose={onClose}
      businesses={businesses}
    />
  )
}

export default MostLocationsBusinessModalContainer
