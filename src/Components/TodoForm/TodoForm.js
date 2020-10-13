import React from 'react'
import './TodoForm.scss'
import Select from '../UI/Select/Select'

const TodoForm = props => {
	return (
		<div className='form'>
			<button 
				className='form__button'
        onClick={() => props.onClick()}
        ref={props.buttonRef}
			>
				ADD
			</button>
			<input 
				className='form__text' 
        type='text'
        placeholder='What needs to be done?'
        onKeyDown={(e) => props.onKeyDown(e)}
        ref={props.inputRef} 
			/>

      <Select onChange={props.onChange} value={props.value}/>
		</div>
	)
}

export default TodoForm

