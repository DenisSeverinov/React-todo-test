import React from 'react'
import {NavLink} from 'react-router-dom'
import './TodoFilter.scss'



const TodoFilter = props => {
	return (
		<div className='footer'>
			<p className='footer__text'>{props.tasks.filter(task => !task.completed).length} Task</p>
			<nav className='filter'>
        <NavLink className='filter__link' exact to='/'>All</NavLink>
        <NavLink className='filter__link' to='/active'>Active</NavLink>
        <NavLink className='filter__link' to='/done'>Completed</NavLink>
			</nav>
      <p className='footer__text' onClick={() => props.onClick()}>
        Clear completed
      </p>
		</div>
	)
}

export default TodoFilter