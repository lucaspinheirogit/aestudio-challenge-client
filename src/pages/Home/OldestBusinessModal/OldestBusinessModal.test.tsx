import React from 'react'
import { screen, render, waitFor } from '@testing-library/react'

import OldestBusinessModal from './OldestBusinessModal.container'

describe('OldestBusinessModal', () => {
  it('should render correctly', () => {
    render(<OldestBusinessModal open onClose={console.log} />)
  })

  it('should render correctly the oldest business', async () => {
    render(<OldestBusinessModal open onClose={console.log} />)

    const loadingSpinner = screen.queryByTestId('loading')
    expect(loadingSpinner).toBeInTheDocument()

    await waitFor(() => {
      expect(loadingSpinner).not.toBeInTheDocument()
    })

    expect(screen.getByText('Oldest Business')).toBeInTheDocument()
    expect(screen.getByTestId('responsive-table')).toBeInTheDocument()
  })
})
