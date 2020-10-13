import React from 'react'
import './Select.scss'

const Select = props => {
 
  return (
    <select
      className='select'
      value={props.value}
      onChange={props.onChange}
    >
      <option className='select__item' value='3'>Low</option>
      <option className='select__item' value='2'>Medium</option>
      <option className='select__item' value='1'>High</option>
    </select>
  )
}

export default Select