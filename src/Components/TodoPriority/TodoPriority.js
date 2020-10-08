import React from 'react'
import './TodoPriority.scss'

const TodoPriority = props => {

  return (
    <ul className='list-priority'>
      <li className='list-priority__item'><i className="fas fa-exclamation green" aria-hidden="true"></i>Низкий</li>
      <li className='list-priority__item'><i className="fa fa-exclamation yellow" aria-hidden="true"></i>Средний</li>
      <li className='list-priority__item'><i className="fa fa-exclamation red" aria-hidden="true"></i>Высокий</li>
    </ul>
  )
}

export default TodoPriority