import React from 'react'
import Moment from 'react-moment'

import { GoogleMapsLogo } from 'assets/svg'
import ResponsiveTable from 'components/ResponsiveTable'
import { Business } from 'types'

import { LocationContainer } from './BusinessesList.styles'

interface Props {
  businesses: Business[]
}

const BusinessesList: React.FC<Props> = ({ businesses }: Props) => {
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
      <Moment date={business?.location_start_date} format="DD/MM/YYYY" />,
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
    <ResponsiveTable
      name="business-list"
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
  )
}

export default BusinessesList
