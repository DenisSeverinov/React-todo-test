import React from 'react'
import './TodoList.scss'
import PropTypes from 'prop-types'
import TodoItem from 'Components/TodoItem/TodoItem'

const TodoList = props => (
  <ul className='list'>
    { props.tasks.map(task => (
      <TodoItem
        key={task.id}
        task={task}
        toggleCheckbox={props.toggleCheckbox}
        deleteTodo={props.deleteTodo}
        editTodo={props.editTodo}
        editTitle={props.editTitle}
      />
    )) }
  </ul>
)

TodoList.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  editTitle: PropTypes.func.isRequired,
  toggleCheckbox: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TodoList
