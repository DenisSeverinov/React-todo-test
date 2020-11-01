import React, { Dispatch } from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import TodoList from 'Components/TodoList/TodoList'
import TodoForm from 'Components/TodoForm/TodoForm'
import TodoFilter from 'Components/TodoFilter/TodoFilter'
import TodoSort from 'Components/TodoSort/TodoSort'
import { toggleAllCheckbox, takeFromLocalStorage } from 'store/actions/rootReducer'
import './App.scss';
import { getTasksSelector, getInputValueSelector, getPrioritySelector } from 'selectors/selector';
import { InitialState, Task } from 'interfaces/interfaces';

type AppProps = {
  tasks: Task[]
  priority: string,
  inputValue: string,
  toggleAllCheckbox: () => void,
  takeFromLocalStorage: (tasks: Task[]) => void
}

class App extends React.Component<AppProps> {
  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
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

function mapStatetoProps(state: InitialState) {
  return {
    tasks: getTasksSelector(state),
    priority: getPrioritySelector(state),
    inputValue: getInputValueSelector(state),
  }
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    toggleAllCheckbox: () => dispatch(toggleAllCheckbox()),
    takeFromLocalStorage: (tasks: Task[]) => dispatch(takeFromLocalStorage(tasks)),
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(App);
