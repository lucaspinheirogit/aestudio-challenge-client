import React from 'react'
import { screen, render } from '@testing-library/react'

import Button from './Button'

describe('Button', () => {
  it('should render correctly', () => {
    render(<Button title="Click me" onClick={() => console.log('click')} />)

    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
})
