import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import './TodoFilter.scss'

const TodoFilter = props => (
  <div className='footer'>
    <p className='footer__text'>
      {props.tasks.filter(task => !task.completed).length}
      &nbsp;Task
    </p>
    <nav className='filter'>
      <NavLink className='filter__link' exact to='/'>All</NavLink>
      <NavLink className='filter__link' to='/active'>Active</NavLink>
      <NavLink className='filter__link' to='/done'>Completed</NavLink>
    </nav>
    <button className='footer__button' type='button' onClick={() => props.onClick()}>
      Clear completed
    </button>
  </div>
)

TodoFilter.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
}

export default TodoFilter
