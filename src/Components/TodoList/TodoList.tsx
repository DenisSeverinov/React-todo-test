import React from 'react'
import './TodoList.scss'
import TodoItem from 'Components/TodoItem/TodoItem'
import { ITask } from 'interfaces/interfaces'

type TodoListProps ={
  tasks: ITask[]
}

const TodoList = (props: TodoListProps) => (
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
