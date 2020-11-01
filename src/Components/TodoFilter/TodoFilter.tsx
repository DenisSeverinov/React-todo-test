import React, { Dispatch } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteCompletedTasks } from 'store/actions/rootReducer'
import './TodoFilter.scss'
import { Task } from 'interfaces/interfaces'

type TodoFilterProps = {
  tasks: Task[],
  deleteCompletedTasks: () => void
}

const TodoFilter: React.FC<TodoFilterProps> = props => (
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

function mapDispatchtoProps(dispatch: Dispatch<any>) {
  return {
    deleteCompletedTasks: () => dispatch(deleteCompletedTasks()),
  }
}

export default connect(null, mapDispatchtoProps)(TodoFilter)
