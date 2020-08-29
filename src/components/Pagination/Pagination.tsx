import React from 'react'
import ReactPaginate from 'react-paginate'

import { Container } from './Pagination.styles'

interface Props {
  currentPage: number
  pageLength: number
  listCount: number
  handlePageChange: (page: number) => void
}

const Pagination: React.FC<Props> = ({
  currentPage,
  pageLength,
  listCount,
  handlePageChange
}: Props) => {
  const pageCount = Math.ceil(listCount / pageLength)

  return (
    <Container data-testid="pagination">
      {pageCount > 0 && (
        <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          initialPage={currentPage}
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          containerClassName={'pagination'}
          activeClassName={'active'}
          onPageChange={({ selected }) => handlePageChange(selected)}
        />
      )}
    </Container>
  )
}

export default Pagination
