import React, { Component } from 'react'
import './TodoForm.scss'
import PropTypes from 'prop-types'
import Select from 'Components/UI/Select/Select'

class TodoForm extends Component {
  submitHandler = e => {
    e.preventDefault()
    if (this.props.inputValue.trim()) {
      this.props.onCreate(this.props.inputValue)
    }
  }

  handleInputChange = e => {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <form className='form' onSubmit={this.submitHandler}>
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
        <Select onBlur={this.props.onBlur} value={this.props.value} />
      </form>
    )
  }
}

TodoForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default TodoForm
