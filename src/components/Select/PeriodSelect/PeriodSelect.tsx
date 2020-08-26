import React from 'react'
import { ValueType } from 'react-select'

import Select from 'components/Select'

import { Form, Label } from './PeriodSelect.styles'

interface Props {
  value: ValueType<any>
  onChange: (value: ValueType<any>) => void
}

const options = [
  { value: 'thisMonth', label: 'This Month' },
  { value: 'lastMonth', label: 'Last Month' },
  { value: 'thisQuarter', label: 'This Quarter' },
  { value: 'lastQuarter', label: 'Last Quarter' },
  { value: 'thisYear', label: 'This Year' },
  { value: 'lastYear', label: 'Last Year' }
]

const PeriodSelect: React.FC<Props> = ({ value, onChange, ...props }: Props) => (
  <Form role="form">
    <Label htmlFor="periodSelect">Filter by</Label>
    <Select
      options={options}
      value={value}
      onChange={onChange}
      name="periodSelect"
      inputId="periodSelect"
      isClearable
      {...props}
    />
  </Form>
)

export default PeriodSelect
