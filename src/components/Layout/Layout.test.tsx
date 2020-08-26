import React from 'react'
import { screen, render } from '@testing-library/react'

import Layout from './Layout'

describe('Layout', () => {
  it('should render correctly', () => {
    render(<Layout />)
  })

  it('should render correctly with children', () => {
    render(
      <Layout>
        <p>I'm the children</p>
      </Layout>
    )

    expect(screen.getByText("I'm the children")).toBeInTheDocument()
  })

  it('should render loading spinner if loading prop is true', () => {
    render(<Layout loading />)

    expect(screen.getByTestId('loading')).toBeInTheDocument()
  })
})
