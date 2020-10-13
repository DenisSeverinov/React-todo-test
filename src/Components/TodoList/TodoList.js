import React from 'react'
import './TodoList.scss'
import TodoItem from '../TodoItem/TodoItem'

const TodoList = props => {

    return (
      <ul className='list'>
        {props.tasks.map(task => 
                  <TodoItem
                    key={task.id} 
                    task={task} 
                    onChange={props.onChange} 
                    onClick={props.onClick}
                    handleEditTitle={props.handleEditTitle}
                  />
        )}
      </ul>
    )  
}

export default TodoList