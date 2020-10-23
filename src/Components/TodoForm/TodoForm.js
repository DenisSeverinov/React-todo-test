import React, { Component } from 'react'
import './TodoForm.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo, editInputValue, removeFocusSelect } from 'store/actions/rootReducer'
import Select from 'Components/UI/Select/Select'

class TodoForm extends Component {
  handleSubmit = e => {
    e.preventDefault()
    if (this.props.inputValue.trim()) {
      this.props.addTodo(this.props.inputValue, this.generateId())
    }
  }

  handleInputChange = e => {
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

TodoForm.propTypes = {
  editInputValue: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  removeFocusSelect: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (title, id) => dispatch(addTodo(title, id)),
    editInputValue: value => dispatch(editInputValue(value)),
    removeFocusSelect: e => dispatch(removeFocusSelect(e)),
  }
}

export default connect(null, mapDispatchToProps)(TodoForm)
