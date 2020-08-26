import React from 'react'
import { screen, render } from '@testing-library/react'

import Responsive from './Responsive'

describe('Responsive', () => {
  it('should render desktop and mobile correctly according to screen size', () => {
    render(<Responsive desktop={<p>desktop</p>} mobile={<p>mobile</p>} />)

    expect(screen.queryByText('desktop')).toBeInTheDocument()
    expect(screen.queryByText('mobile')).not.toBeInTheDocument()

    // Resize screen to 500px wide
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))

    expect(screen.queryByText('mobile')).toBeInTheDocument()
    expect(screen.queryByText('desktop')).not.toBeInTheDocument()
  })
})
