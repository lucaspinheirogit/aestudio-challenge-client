import React from 'react'
import Moment from 'react-moment'

import { Logo, GoogleMapsLogo } from 'assets/svg'
import ResponsiveTable from 'components/ResponsiveTable'
import PaginationComponent from 'components/Pagination'
import { Business, Pagination } from 'types'

import { Container, LocationContainer } from './Home.styles'

interface Props {
  businesses: Business[]
  pagination: Pagination
  setPagination: (pagination: Pagination) => void
}

const Home: React.FC<Props> = ({ businesses, pagination, setPagination }: Props) => {
  const renderBusiness = (business: Business) => {
    const locationLatitude = business?.location_1?.latitude
    const locationLongitude = business?.location_1?.longitude

    const locationCoords = `${locationLatitude},${locationLongitude}`
    const googleMapsURL = `http://maps.google.com/?q=${locationCoords}`

    return [
      business?.business_name,
      business?.naics,
      business?.primary_naics_description,
      business?.council_district,
      business?.street_address,
      business?.city,
      business?.zip_code,
      business?.location_account,
      business?.location_description,
      <Moment date={business?.location_start_date} format="YYYY/MM/DD" />,
      business?.location_1 ? (
        <LocationContainer>
          <a href={googleMapsURL} target="_blank" rel="noopener noreferrer">
            <img src={GoogleMapsLogo} width="64" alt="Google Maps Logo" title={locationCoords} />
          </a>
          <span>{locationLatitude}</span>
          <span>{locationLongitude}</span>
        </LocationContainer>
      ) : (
        'N/A'
      )
    ]
  }

  return (
    <Container>
      <img width="256" src={Logo} alt="AE.STUDIO logo" />
      <ResponsiveTable
        headers={[
          'Business name',
          'NAICS',
          'NAICS Description',
          'Council District',
          'Street address',
          'City',
          'ZIP code',
          'Location Account',
          'Location Description',
          'Location Start Date',
          'Location Coords'
        ]}
        body={businesses.map(renderBusiness)}
      />
      <PaginationComponent
        currentPage={pagination.page}
        pageLength={pagination.limit}
        listCount={pagination.count}
        handlePageChange={(page: number) => {
          if (page !== pagination.page) setPagination({ ...pagination, page })
        }}
      />
    </Container>
  )
}

export default Home
