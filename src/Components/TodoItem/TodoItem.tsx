import React, { Dispatch } from 'react'
import { connect } from 'react-redux'
import { Task } from 'interfaces/interfaces'
import {
  editTodo, toggleCheckbox,
  deleteTodo, editTitle,
} from 'store/actions/rootReducer'
import './TodoItem.scss'

type TodoItemProps = {
  task: Task,
  editTodo: (id: string) => void,
  toggleCheckbox: (id: string) => void,
  deleteTodo: (id: string) => void,
  editTitle: (title: string, id: string) => void,
}

class TodoItem extends React.Component<TodoItemProps> {
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

  handleClickKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      this.props.editTitle(e.currentTarget.value, this.props.task.id);
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
            onKeyPress={this.handleClickKeyDown}
            autoFocus
          />
        </div>
      )
      : (
        <li className={this.getClassTask()}>
          <label
            className={this.getClassIcon()}
            htmlFor={`${this.props.task.id}`}
          >
            <input
              className='item__checkbox'
              type='checkbox'
              id={`${this.props.task.id}`}
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

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    editTodo: (id: string) => dispatch(editTodo(id)),
    toggleCheckbox: (id: string) => dispatch(toggleCheckbox(id)),
    deleteTodo: (id: string) => dispatch(deleteTodo(id)),
    editTitle: (title: string, id: string) => dispatch(editTitle(title, id)),
  }
}

export default connect(null, mapDispatchToProps)(TodoItem)
