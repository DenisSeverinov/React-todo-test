import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import TodoList from 'Components/TodoList/TodoList'
import TodoForm from 'Components/TodoForm/TodoForm'
import TodoFilter from 'Components/TodoFilter/TodoFilter'
import TodoSort from 'Components/TodoSort/TodoSort'
import { toggleAllCheckbox, takeFromLocalStorage } from 'store/actions/rootReducer'
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
            value={this.props.priority}
          />
        </div>
        <Route
          path='/'
          exact
          render={() => (
            <>
              <TodoList tasks={this.props.tasks} />
              <TodoFilter tasks={this.props.tasks} />
            </>
          )}
        />
        <Route
          path='/active'
          render={() => (
            <>
              <TodoList tasks={activeTasks} />
              <TodoFilter tasks={activeTasks} />
            </>
          )}
        />
        <Route
          path='/done'
          render={() => (
            <>
              <TodoList tasks={completedTasks} />
              <TodoFilter tasks={completedTasks} />
            </>
          )}
        />
        <TodoSort />
      </div>
    );
  }
}

App.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  inputValue: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  toggleAllCheckbox: PropTypes.func.isRequired,
  takeFromLocalStorage: PropTypes.func.isRequired,
}

function mapStatetoProps(state) {
  return {
    tasks: state.tasks,
    priority: state.priority,
    inputValue: state.inputValue,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleAllCheckbox: () => dispatch(toggleAllCheckbox()),
    takeFromLocalStorage: tasks => dispatch(takeFromLocalStorage(tasks)),
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(App);
