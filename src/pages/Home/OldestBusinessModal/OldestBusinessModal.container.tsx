import React, { useEffect, useState, useCallback } from 'react'

import api from 'api'
import { ModalProps } from 'components/Modal'
import { Business } from 'types'

import OldestBusinessModal from './OldestBusinessModal'

const OldestBusinessModalContainer: React.FC<ModalProps> = ({ open, onClose }: ModalProps) => {
  const [loading, setLoading] = useState(true)
  const [business, setBusiness] = useState<Business | null>(null)

  const getOldestBusiness = useCallback(async () => {
    setLoading(true)

    const oldestBusiness = await api.getOldestBusiness()
    setBusiness(oldestBusiness)

    setLoading(false)
  }, [])

  useEffect(() => {
    getOldestBusiness()
  }, [getOldestBusiness])

  return <OldestBusinessModal open={open} loading={loading} onClose={onClose} business={business} />
}

export default OldestBusinessModalContainer
