import React from 'react'

import { Logo } from 'assets/svg'
import PaginationComponent from 'components/Pagination'
import Button from 'components/Button'
import { Business, Pagination } from 'types'

import BusinessesList from './BusinessesList'
import OldestBusinessModal from './OldestBusinessModal'
import { Container, ButtonsContainer } from './Home.styles'

interface Props {
  businesses: Business[]
  pagination: Pagination
  setPagination: (pagination: Pagination) => void
  isOldestBusinessModalOpen: boolean
  toggleOldestBusinessModalOpen: () => void
}

const Home: React.FC<Props> = ({
  businesses,
  pagination,
  setPagination,
  isOldestBusinessModalOpen,
  toggleOldestBusinessModalOpen
}: Props) => (
  <Container>
    <img width="256" src={Logo} alt="AE.STUDIO logo" />

    <ButtonsContainer>
      <Button title="Show oldest business" onClick={toggleOldestBusinessModalOpen} />
      <Button
        title="Show Business with the most locations"
        onClick={toggleOldestBusinessModalOpen}
      />
    </ButtonsContainer>

    <BusinessesList businesses={businesses} />
    <PaginationComponent
      currentPage={pagination.page}
      pageLength={pagination.limit}
      listCount={pagination.count}
      handlePageChange={(page: number) => {
        if (page !== pagination.page) setPagination({ ...pagination, page })
      }}
    />

    {isOldestBusinessModalOpen && (
      <OldestBusinessModal
        open={isOldestBusinessModalOpen}
        onClose={toggleOldestBusinessModalOpen}
      />
    )}
  </Container>
)

export default Home
