import React from 'react'
import './TodoSort.scss'
import PropTypes from 'prop-types'

const TodoSort = props => (
  <div className='wrap-sort'>
    <button className='wrap-sort__button' type='button' onClick={props.handleButtonSortAscending}>Sort ascending</button>
    <button className='wrap-sort__button' type='button' onClick={props.handleButtonSortDescending}>Sort descending</button>
  </div>
)

TodoSort.propTypes = { handleButtonSortAscending: PropTypes.func.isRequired,
  handleButtonSortDescending: PropTypes.func.isRequired }

export default TodoSort
