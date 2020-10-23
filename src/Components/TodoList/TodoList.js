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
      />
    )) }
  </ul>
)

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TodoList
