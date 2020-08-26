import React from 'react'

import Responsive from 'components/Responsive'

import Table from './Table'
import Cards from './Cards'

interface Props {
  headers: string[]
  body: any
}

const ResponsiveTable = ({ headers, body, ...props }: Props) => (
  <Responsive
    desktop={<Table headers={headers} body={body} {...props} />}
    mobile={<Cards headers={headers} body={body} {...props} />}
  />
)

export default ResponsiveTable
