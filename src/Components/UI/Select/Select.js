import React from 'react'
import './Select.scss'
import PropTypes from 'prop-types'

const Select = props => (
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

Select.propTypes = { value: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired }

export default Select
