import React from 'react'
import { Dispatch } from 'redux'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteCompletedTasks } from 'store/actions/rootReducer'
import './TodoFilter.scss'
import { ITask } from 'interfaces/interfaces'

type TodoFilterProps = {
  tasks: ITask[],
  deleteCompletedTasks: () => void
}

const TodoFilter = (props: TodoFilterProps) => (
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

function mapDispatchtoProps(dispatch: Dispatch) {
  return {
    deleteCompletedTasks: () => dispatch(deleteCompletedTasks()),
  }
}

export default connect(null, mapDispatchtoProps)(TodoFilter)
