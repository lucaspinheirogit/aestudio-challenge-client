import React from 'react'
import ReactSelect, { Props } from 'react-select'

const Select: React.FC<Props> = props => (
  <ReactSelect
    styles={{
      container: provided => ({
        ...provided,
        boxShadow: '5px 5px 5px var(--light-gray)'
      })
    }}
    {...props}
  />
)

export default Select
