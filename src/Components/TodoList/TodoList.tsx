import React from 'react'
import './TodoList.scss'
import TodoItem from 'Components/TodoItem/TodoItem'
import { Task } from 'interfaces/interfaces'

type TodoListProps ={
  tasks: Task[]
}

const TodoList: React.FC<TodoListProps> = props => (
  <ul className='list'>
    { props.tasks.map(task => (
      <TodoItem
        key={task.id}
        task={task}
      />
    )) }
  </ul>
)

export default TodoList
