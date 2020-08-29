import React from 'react'
import { screen, render, waitFor, fireEvent } from '@testing-library/react'

import Home from './Home.container'

describe('Home', () => {
  it('should render correctly', () => {
    render(<Home />)
  })

  it('should render correctly a list of active businesses', async () => {
    render(<Home />)

    const loadingSpinner = screen.queryByTestId('loading')
    expect(loadingSpinner).toBeInTheDocument()

    await waitFor(() => {
      expect(loadingSpinner).not.toBeInTheDocument()
    })

    expect(screen.getByTestId('responsive-table')).toBeInTheDocument()
  })

  it('should allow user to see the Oldest Business', async () => {
    render(<Home />)

    const loadingSpinner = screen.queryByTestId('loading')
    expect(loadingSpinner).toBeInTheDocument()

    await waitFor(() => {
      expect(loadingSpinner).not.toBeInTheDocument()
    })

    await fireEvent.click(screen.getByText('Show oldest business'))

    await waitFor(() => {
      expect(screen.getByTestId('modal')).toBeInTheDocument()
    })
  })

  it('should allow user to see the Business with most locations', async () => {
    render(<Home />)

    const loadingSpinner = screen.queryByTestId('loading')
    expect(loadingSpinner).toBeInTheDocument()

    await waitFor(() => {
      expect(loadingSpinner).not.toBeInTheDocument()
    })

    await fireEvent.click(screen.getByText('Show Business with the most locations'))

    await waitFor(() => {
      expect(screen.getByTestId('modal')).toBeInTheDocument()
    })
  })
})
