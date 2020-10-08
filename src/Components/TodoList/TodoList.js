import React from 'react'
import './TodoList.scss'
import TodoItem from '../TodoItem/TodoItem'

const TodoList = props => {

    return (
      <ul className='list'>
        {props.tasks.map(task => {
          return <TodoItem
                    key={task.id} 
                    task={task} 
                    onChange={props.onChange} 
                    onClick={props.onClick}
                    onBlur={props.onBlur}
                  />
        })}
      </ul>
    )  
}

export default TodoList