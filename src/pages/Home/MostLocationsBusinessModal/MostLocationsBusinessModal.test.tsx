import React from 'react'
import { screen, render, waitFor } from '@testing-library/react'

import MostLocationsBusinessModal from './MostLocationsBusinessModal.container'

describe('MostLocationsBusinessModal', () => {
  it('should render correctly', () => {
    render(<MostLocationsBusinessModal open onClose={console.log} />)
  })

  it('should render correctly the business with the most locations', async () => {
    render(<MostLocationsBusinessModal open onClose={console.log} />)

    const loadingSpinner = screen.queryByTestId('loading')
    expect(loadingSpinner).toBeInTheDocument()

    await waitFor(() => {
      expect(loadingSpinner).not.toBeInTheDocument()
    })

    expect(screen.getByText('Business with the most locations')).toBeInTheDocument()
    expect(screen.getByTestId('responsive-table')).toBeInTheDocument()
  })
})
