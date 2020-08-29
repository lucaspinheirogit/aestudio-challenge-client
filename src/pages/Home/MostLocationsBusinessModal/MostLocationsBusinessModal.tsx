import React from 'react'

import Modal, { ModalProps } from 'components/Modal'
import { Business } from 'types'

import { Container, Title } from './MostLocationsBusinessModal.styles'
import BusinessesList from '../BusinessesList'

interface Props extends ModalProps {
  businesses: Business[] | null
}

const MostLocationsBusinessModal: React.FC<Props> = ({
  open,
  loading,
  onClose,
  businesses
}: Props) => (
  <Modal loading={loading} open={open} onClose={onClose}>
    <Container>
      <Title>Business with the most locations</Title>
      {businesses && <BusinessesList businesses={businesses} />}
    </Container>
  </Modal>
)

export default MostLocationsBusinessModal
