import React from 'react'
import './Select.scss'

type SelectProps = {
  value: string,
  onBlur: (e: React.FocusEvent) => void,
}

const Select = (props: SelectProps) => (
  <select
    className='select'
    defaultValue={props.value}
    onBlur={props.onBlur}
  >
    <option className='select__item' value='3'>Low</option>
    <option className='select__item' value='2'>Medium</option>
    <option className='select__item' value='1'>High</option>
  </select>
)

export default Select
