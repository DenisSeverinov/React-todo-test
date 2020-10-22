import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import TodoList from 'Components/TodoList/TodoList'
import TodoForm from 'Components/TodoForm/TodoForm'
import TodoFilter from 'Components/TodoFilter/TodoFilter'
import TodoSort from 'Components/TodoSort/TodoSort'
import {
  addTodo, editInputValue,
  deleteTodo, toggleCheckbox,
  editTitle, toggleAllCheckbox,
  deleteCompletedTasks, editTodo,
  removeFocusSelect, sortAscending,
  sortDescending, takeFromLocalStorage,
} from 'store/actions/app'
import './App.scss';

class App extends Component {
  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    this.props.takeFromLocalStorage(tasks)
  }

  componentDidUpdate() {
    localStorage.setItem('tasks', JSON.stringify(this.props.tasks));
  }

  render() {
    const completedTasks = this.props.tasks.filter(task => task.completed);
    const activeTasks = this.props.tasks.filter(task => !task.completed);

    const classForIcon = ['wrap-icon__toggle-all', 'fas', 'fa-angle-down'];

    if (completedTasks.length !== 0) {
      classForIcon.push('wrap-icon__toggle-all_active');
    }

    return (
      <div className='App'>
        <h1 className='title'>TO DO LIST APP</h1>
        <div className='container'>
          <div className='wrap-icon'>
            <i
              className={classForIcon.join(' ')}
              onClick={this.props.toggleAllCheckbox}
            />
          </div>
          <TodoForm
            inputValue={this.props.inputValue}
            addTodo={this.props.addTodo}
            editInputValue={this.props.editInputValue}
            removeFocusSelect={this.props.removeFocusSelect}
            value={this.props.priority}
          />
        </div>
        <Route
          path='/'
          exact
          render={() => (
            <>
              <TodoList
                toggleCheckbox={this.props.toggleCheckbox}
                deleteTodo={this.props.deleteTodo}
                editTodo={this.props.editTodo}
                editTitle={this.props.editTitle}
                tasks={this.props.tasks}
              />
              <TodoFilter
                tasks={this.props.tasks}
                deleteCompletedTasks={this.props.deleteCompletedTasks}
              />
            </>
          )}
        />
        <Route
          path='/active'
          render={() => (
            <>
              <TodoList
                toggleCheckbox={this.props.toggleCheckbox}
                deleteTodo={this.props.deleteTodo}
                editTodo={this.props.editTodo}
                editTitle={this.props.editTitle}
                tasks={activeTasks}
              />
              <TodoFilter
                tasks={activeTasks}
                deleteCompletedTasks={this.props.deleteCompletedTasks}
              />
            </>
          )}
        />
        <Route
          path='/done'
          render={() => (
            <>
              <TodoList
                toggleCheckbox={this.props.toggleCheckbox}
                deleteTodo={this.props.deleteTodo}
                editTodo={this.props.editTodo}
                editTitle={this.props.editTitle}
                tasks={completedTasks}
              />
              <TodoFilter
                tasks={completedTasks}
                deleteCompletedTasks={this.props.deleteCompletedTasks}
              />
            </>
          )}
        />
        <TodoSort
          sortAscending={this.props.sortAscending}
          sortDescending={this.props.sortDescending}
        />
      </div>
    );
  }
}

App.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  inputValue: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  addTodo: PropTypes.func.isRequired,
  editInputValue: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleCheckbox: PropTypes.func.isRequired,
  editTitle: PropTypes.func.isRequired,
  toggleAllCheckbox: PropTypes.func.isRequired,
  deleteCompletedTasks: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  removeFocusSelect: PropTypes.func.isRequired,
  sortAscending: PropTypes.func.isRequired,
  sortDescending: PropTypes.func.isRequired,
  takeFromLocalStorage: PropTypes.func.isRequired,
}

function mapStatetoProps(state) {
  return {
    tasks: state.app.tasks,
    priority: state.app.priority,
    inputValue: state.app.inputValue,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: title => dispatch(addTodo(title)),
    editInputValue: value => dispatch(editInputValue(value)),
    deleteTodo: id => dispatch(deleteTodo(id)),
    toggleCheckbox: id => dispatch(toggleCheckbox(id)),
    editTitle: (title, id) => dispatch(editTitle(title, id)),
    toggleAllCheckbox: () => dispatch(toggleAllCheckbox()),
    deleteCompletedTasks: () => dispatch(deleteCompletedTasks()),
    editTodo: id => dispatch(editTodo(id)),
    removeFocusSelect: e => dispatch(removeFocusSelect(e)),
    sortAscending: () => dispatch(sortAscending()),
    sortDescending: () => dispatch(sortDescending()),
    takeFromLocalStorage: tasks => dispatch(takeFromLocalStorage(tasks)),
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(App);
