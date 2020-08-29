import React from 'react'
import { screen, render } from '@testing-library/react'

import Pagination from './Pagination'

describe('Modal', () => {
  it('should render correctly', () => {
    render(
      <Pagination currentPage={0} pageLength={10} listCount={100} handlePageChange={console.log} />
    )

    expect(screen.getByTestId('pagination')).toBeInTheDocument()
  })
})
