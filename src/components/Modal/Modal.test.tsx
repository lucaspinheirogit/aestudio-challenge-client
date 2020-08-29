import React from 'react'
import { screen, render } from '@testing-library/react'

import Modal from './Modal'

describe('Modal', () => {
  it('should render correctly', () => {
    render(<Modal open onClose={console.log} />)

    expect(screen.getByTestId('modal')).toBeInTheDocument()
  })

  it('should render correctly with children', () => {
    render(
      <Modal open onClose={console.log}>
        <p>I'm the children</p>
      </Modal>
    )

    expect(screen.getByText("I'm the children")).toBeInTheDocument()
  })

  it('should render loading spinner if loading prop is true', () => {
    render(<Modal open onClose={console.log} loading />)

    expect(screen.getByTestId('loading')).toBeInTheDocument()
  })
})
