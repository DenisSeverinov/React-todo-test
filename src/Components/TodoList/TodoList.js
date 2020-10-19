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
        onChange={props.onChange}
        onClick={props.onClick}
        handleEditTitle={props.handleEditTitle}
      />
    )) }
  </ul>
)

TodoList.propTypes = {
  onClick: PropTypes.func.isRequired,
  handleEditTitle: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TodoList
