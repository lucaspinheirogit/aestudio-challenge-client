import React from 'react'

import Responsive from 'components/Responsive'

import Table from './Table'
import Cards from './Cards'

interface Props {
  name: string
  headers: string[]
  body: any
}

const ResponsiveTable = ({ name, headers, body, ...props }: Props) => (
  <Responsive
    desktop={<Table name={name} headers={headers} body={body} {...props} />}
    mobile={<Cards name={name} headers={headers} body={body} {...props} />}
  />
)

export default ResponsiveTable
