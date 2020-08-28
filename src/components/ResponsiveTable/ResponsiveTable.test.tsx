import React from 'react'
import { screen, render } from '@testing-library/react'

import ResponsiveTable from './ResponsiveTable'
import Cards from './Cards'
import Table from './Table'

describe('ResponsiveTable', () => {
  it('should render table or cards correctly according to screen size', () => {
    render(<ResponsiveTable name="business-list" headers={['CompanyName']} body={[['Google'], ['Amazon']]} />)

    expect(screen.queryByTestId('responsive-table')).toBeInTheDocument()
    expect(screen.queryByTestId('responsive-table-cards')).not.toBeInTheDocument()

    // Resize screen to 500px wide
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))

    expect(screen.queryByTestId('responsive-table-cards')).toBeInTheDocument()
    expect(screen.queryByTestId('responsive-table')).not.toBeInTheDocument()
  })

  it('should render Cards correctly', () => {
    render(<Cards headers={['CompanyName']} body={[['Google'], ['Amazon']]} />)

    expect(screen.getByText('Google')).toBeInTheDocument()
  })

  it('should render Table correctly', () => {
    render(<Table headers={['CompanyName']} body={[['Google'], ['Amazon']]} />)

    expect(screen.getByText('Google')).toBeInTheDocument()
  })
})
