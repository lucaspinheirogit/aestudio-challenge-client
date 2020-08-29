import React from 'react'
import ResponsiveModal from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'

import { screenSizes } from 'utils/responsive'
import Loading from 'components/Loading'

export interface ModalProps {
  open: boolean
  onClose: () => void
  loading?: boolean
  children?: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ open, onClose, loading, children }: ModalProps) => {
  return (
    <ResponsiveModal
      data-testid="modal"
      open={open}
      onClose={onClose}
      center
      closeOnEsc
      styles={{
        modal: {
          maxWidth: screenSizes.xxl,
          overflow: 'auto',
          borderRadius: '1rem',
          padding: '0.75rem'
        },
        closeButton: { top: 5, right: 5 },
        closeIcon: { fill: 'var(--orange)' }
      }}
    >
      {loading ? <Loading style={{ height: 'auto', padding: '3rem' }} /> : children}
    </ResponsiveModal>
  )
}

export default Modal
