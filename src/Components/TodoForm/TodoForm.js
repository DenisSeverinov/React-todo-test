import React, { Component } from 'react'
import './TodoForm.scss'
import PropTypes from 'prop-types'
import Select from 'Components/UI/Select/Select'

class TodoForm extends Component {
  handleSubmit = e => {
    e.preventDefault()
    if (this.props.inputValue.trim()) {
      this.props.addTodo(this.props.inputValue)
    }
  }

  handleInputChange = e => {
    this.props.editInputValue(e.target.value);
  }

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

TodoForm.propTypes = {
  editInputValue: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  removeFocusSelect: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default TodoForm
