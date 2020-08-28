import React from 'react'

import Modal, { ModalProps } from 'components/Modal'
import { Business } from 'types'

import { Container, Title } from './OldestBusinessModal.styles'
import BusinessesList from '../BusinessesList'

interface Props extends ModalProps {
  business: Business | null
}

const OldestBusinessModal: React.FC<Props> = ({ open, loading, onClose, business }: Props) => (
  <Modal loading={loading} open={open} onClose={onClose}>
    <Container>
      <Title>Oldest Business</Title>
      {business && <BusinessesList businesses={[business]} />}
    </Container>
  </Modal>
)

export default OldestBusinessModal
