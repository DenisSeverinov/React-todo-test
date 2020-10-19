import React, { Component } from 'react';
import './App.scss';
import { Route } from 'react-router-dom'
import TodoList from 'Components/TodoList/TodoList'
import TodoForm from 'Components/TodoForm/TodoForm'
import TodoFilter from 'Components/TodoFilter/TodoFilter'
import TodoSort from 'Components/TodoSort/TodoSort'

class App extends Component {
  state = {
      tasks: [],
      priority: '2',
      inputValue: '',
  }

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    this.setState({ tasks: tasks || [] });
  }

  componentDidUpdate() {
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
  }

  onToggle = id => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      }),
    }))
  }

  onChangeInputValue = value => {
    this.setState({ inputValue: value })
  }

  handelSubmit = title => {
    this.setState(prevState => ({
      tasks: prevState.tasks.concat([{
        id: this.generateId(),
        title,
        completed: false,
        priority: prevState.priority,
      }]),
      inputValue: '',
    }))
  }

  onDelete = id => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => {
        if (task.id !== id) {
          return task;
        }
        return null;
      }),
    }))
  }

  handleEditTitle = (text, id) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task => {
        if (task.id === id && text.trim() !== '') {
          task.title = text;
        }
        return task;
      }),
    }))
  }

  onToggleAll = () => {
    if (this.state.tasks.find(task => !task.completed)) {
      this.setState(prevState => ({
        tasks: prevState.tasks.map(task => {
          if (!task.completed) {
            task.completed = !task.completed;
          }
          return task;
        }),
      }))
    } else {
      this.setState(prevState => ({
        tasks: prevState.tasks.map(task => {
          if (task.completed) {
            task.completed = !task.completed;
          }
          return task;
        }),
      }))
    }
  }

  clearCompletedTasks = () => {
    this.setState(prevState => ({ tasks: prevState.tasks.filter(task => !task.completed) }));
  }

  onBlurSelect = e => {
    this.setState({ priority: e.target.value });
  }

  handleButtonSortAscending = () => {
    this.setState(prevState => ({
      tasks: prevState.tasks.sort((a, b) => a.priority - b.priority),
    }));
  }

  handleButtonSortDescending = () => {
    this.setState(prevState => ({
      tasks: prevState.tasks.sort((a, b) => b.priority - a.priority),
    }));
  }

  generateId = () => Math.random().toString(36).substr(2, 9);

  render() {
    const completedTasks = this.state.tasks.filter(task => task.completed);
    const activeTasks = this.state.tasks.filter(task => !task.completed);

    const classForIcon = ['wrap-icon__toggle-all', 'fas', 'fa-angle-down'];

    if (completedTasks.length !== 0) {
      classForIcon.push('wrap-icon__toggle-all_active');
    }

    return (
      <div className='App'>
        <h1 className='title'>TO DO LIST APP</h1>
        <div className='container'>
          {this.state.tasks.length
            ? (
              <div className='wrap-icon'>
                <i
                  className={classForIcon.join(' ')}
                  onClick={this.onToggleAll}
                />
              </div>
            )
            : null}
          <TodoForm
            inputValue={this.state.inputValue}
            onCreate={this.handelSubmit}
            onChange={this.onChangeInputValue}
            onBlur={this.onBlurSelect}
            value={this.state.priority}
          />
        </div>
        <Route
          path='/'
          exact
          render={() => (
            <>
              <TodoList
                onChange={this.onToggle}
                onClick={this.onDelete}
                handleEditTitle={this.handleEditTitle}
                tasks={this.state.tasks}
              />
              <TodoFilter
                tasks={this.state.tasks}
                onClick={this.clearCompletedTasks}
              />
            </>
          )}
        />
        <Route
          path='/active'
          render={() => (
            <>
              <TodoList
                onChange={this.onToggle}
                onClick={this.onDelete}
                handleEditTitle={this.handleEditTitle}
                tasks={activeTasks}
              />
              <TodoFilter
                tasks={activeTasks}
                onClick={this.clearCompletedTasks}
              />
            </>
          )}
        />
        <Route
          path='/done'
          render={() => (
            <>
              <TodoList
                onChange={this.onToggle}
                onClick={this.onDelete}
                handleEditTitle={this.handleEditTitle}
                tasks={completedTasks}
              />
              <TodoFilter
                tasks={completedTasks}
                onClick={this.clearCompletedTasks}
              />
            </>
          )}
        />
        <TodoSort
          handleButtonSortAscending={this.handleButtonSortAscending}
          handleButtonSortDescending={this.handleButtonSortDescending}
        />
      </div>
    );
  }
}

export default App;
