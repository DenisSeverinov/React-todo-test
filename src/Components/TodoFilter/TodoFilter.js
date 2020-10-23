import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { deleteCompletedTasks } from 'store/actions/rootReducer'
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
    <button className='footer__button' type='button' onClick={props.deleteCompletedTasks}>
      Clear completed
    </button>
  </div>
)

TodoFilter.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteCompletedTasks: PropTypes.func.isRequired,
}

function mapDispatchtoProps(dispatch) {
  return {
    deleteCompletedTasks: () => dispatch(deleteCompletedTasks()),
  }
}

export default connect(null, mapDispatchtoProps)(TodoFilter)
