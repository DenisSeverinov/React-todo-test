import React from 'react'
import { Dispatch } from 'redux'
import './TodoForm.scss'
import { connect } from 'react-redux'
import { addTodo, editInputValue, removeFocusSelect } from 'store/actions/rootReducer'
import Select from 'Components/UI/Select/Select'

type TodoFormProps = {
  inputValue: string,
  value: string,
  addTodo: (title: string, id: string) => void,
  editInputValue: (value: string) => void,
  removeFocusSelect: (e: React.FocusEvent) => void
}

class TodoForm extends React.Component<TodoFormProps> {
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (this.props.inputValue.trim()) {
      this.props.addTodo(this.props.inputValue, this.generateId())
    }
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.editInputValue(e.target.value);
  }

  generateId = () => Math.random().toString(36).substr(2, 9);

  render() {
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <button
          className='form__button'
          type='submit'
        >
          ADD
        </button>
        <input
          className='form__text'
          type='text'
          value={this.props.inputValue}
          onChange={this.handleInputChange}
          placeholder='What needs to be done?'
          autoFocus
        />
        <Select onBlur={this.props.removeFocusSelect} value={this.props.value} />
      </form>
    )
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    addTodo: (title: string, id: string) => dispatch(addTodo(title, id)),
    editInputValue: (value: string) => dispatch(editInputValue(value)),
    removeFocusSelect: (e: React.FocusEvent) => dispatch(removeFocusSelect(e)),
  }
}

export default connect(null, mapDispatchToProps)(TodoForm)
