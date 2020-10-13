import React from 'react'
import './TodoSort.scss'

const TodoSort = props => {
  return (
    <div className='wrap-sort'>
      <button className='wrap-sort__button' onClick={props.handleButtonSortAscending}>Sort ascending</button>
      <button className='wrap-sort__button' onClick={props.handleButtonSortDescending}>Sort descending</button>
    </div>
  )
}

export default TodoSort