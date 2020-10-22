import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './TodoItem.scss'

class TodoItem extends Component {
  getClassTask() {
    const classesForTask = ['item'];

    if (this.props.task.completed) {
      classesForTask.push('item_completed');
    }

    switch (this.props.task.priority) {
      case '1':
        classesForTask.push('high');
        break;
      case '2':
        classesForTask.push('medium');
        break;
      case '3':
        classesForTask.push('low');
        break;
      default:
        break
    }

    return classesForTask.join(' ');
  }

  getClassIcon() {
    const classesForIcon = ['item__label', 'far'];
    classesForIcon.push(this.props.task.completed ? 'fa-check-circle' : 'fa-circle');

    return classesForIcon.join(' ');
  }

  handleClickKeyDown = e => {
    if (e.keyCode === 13) {
      this.props.editTitle(e.target.value, this.props.task.id);
      this.handleIsEdit()
    }
  }

  handleIsEdit = () => {
    this.props.editTodo(this.props.task.id)
  }

  onChangeCheckbox = () => {
    this.props.toggleCheckbox(this.props.task.id)
  }

  handleDelete = () => {
    this.props.deleteTodo(this.props.task.id)
  }

  render() {
    return (this.props.task.isEdit
      ? (
        <div className='wrap'>
          <input
            className='wrap__input'
            type='text'
            defaultValue={this.props.task.title}
            onKeyDown={this.handleClickKeyDown}
            autoFocus
          />
        </div>
      )
      : (
        <li className={this.getClassTask()}>
          <label
            className={this.getClassIcon()}
            htmlFor={this.props.task.id}
          >
            <input
              className='item__checkbox'
              type='checkbox'
              id={this.props.task.id}
              onChange={this.onChangeCheckbox}
            />
          </label>
          <span
            className='item__text'
            onDoubleClick={this.handleIsEdit}
          >
            {this.props.task.title}
          </span>
          <i
            className='item__icon fas fa-trash-alt'
            onClick={this.handleDelete}
          />
        </li>
      )
    )
  }
}

TodoItem.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  editTitle: PropTypes.func.isRequired,
  toggleCheckbox: PropTypes.func.isRequired,
  task: PropTypes.shape({
    completed: PropTypes.bool,
    isEdit: PropTypes.bool,
    id: PropTypes.string,
    title: PropTypes.string,
    priority: PropTypes.string,
  }).isRequired,
}

export default TodoItem
