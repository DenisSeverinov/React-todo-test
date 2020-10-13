import React from 'react'
import './TodoForm.scss'

const TodoForm = props => {
	return (
		<div className='form'>
			<button 
				className='form__button'
				onClick={() => props.onClick()}
			>
				ADD
			</button>
			<input 
				className='form__text' 
        type='text'
        placeholder='What needs to be done?'
				onKeyDown={(e) => props.onKeyDown(e)} 
				/>
		</div>
	)
}

export default TodoForm

