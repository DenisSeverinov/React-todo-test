import React, { Component } from 'react';
import './App.scss';
import TodoList from './Components/TodoList/TodoList'
import TodoForm from './Components/TodoForm/TodoForm'
import TodoFilter from './Components/TodoFilter/TodoFilter'
import TodoSort from './Components/TodoSort/TodoSort'
import { Route } from 'react-router-dom'

class App extends Component {

  state = {
    tasks: [],
    priority: '2'
  }
  
  onToggle = id => {
    this.setState(prevState => {
      return {tasks: prevState.tasks.map(task => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      })}
    })
  }

  handelSubmit = () => {

    if (this.inputRef.value.trim()) {

      const newTodo = {
        id: this.generationId(),
        title: this.inputRef.value,
        completed: false,
        priority: this.state.priority
      }

      this.inputRef.value = '';

      let tasks = this.state.tasks;
      tasks.push(newTodo);

      this.setState({tasks});
    }
  }

  onDelete = id => {
    this.setState(prevState => {
      return {tasks: prevState.tasks.filter(task => {
        if (task.id !== id) {
          return task;
        } else {
          return null
        }
      })}
    })
  }

  handelKeyDown = e => {
    if (e.keyCode === 13) {
      this.buttonRef.click();
    }
  }

  handleEditTitle = (text, id) => {
    this.setState(prevState => {
      return {tasks: prevState.tasks.map(task => {
        if (task.id === id && text.trim() !== '') {
          task.title = text;
        } 

        return task;
      })}
    })
  }

  onToggleAll = () => {
    if (this.state.tasks.find(task => !task.completed)) {
      this.setState(prevState => {
        return {tasks: prevState.tasks.map(task => {
          if (!task.completed) {
            task.completed = !task.completed;
          }
    
          return task;
        })}
      })
    } else {
      this.setState(prevState => {
        return {tasks: prevState.tasks.map(task => {
          if (task.completed) {
            task.completed = !task.completed;
          }
    
          return task;
        })}
      })
    }
  }

  clearCompletedTasks = () => {
    let tasks = this.state.tasks.filter(task => !task.completed);
    this.setState({tasks});
  }

  onChangeSelect = (e) => {
    this.setState({
      priority: e.target.value
    })
  }

  handleButtonSortAscending = () => {
    this.setState(prevState => {
      return {tasks: prevState.tasks.sort((a, b) => a.priority - b.priority)}
    }) 
  }

  handleButtonSortDescending = () => {
    this.setState(prevState => {
      return {tasks: prevState.tasks.sort((a, b) => b.priority - a.priority)}
    })
  }

  generationId() {
    return Math.random().toString(36).substr(2, 9);
  }

  componentDidMount() {
   const tasks = JSON.parse(localStorage.getItem('tasks'));
   this.setState({tasks: tasks || []});
  }

  componentDidUpdate() {
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    this.inputRef.focus()
  }

  render() {

    const completedTasks = this.state.tasks.filter(task => task.completed);
    const activeTasks = this.state.tasks.filter(task => !task.completed);
    
    let classForIcon = ['wrap-icon__toggle-all', 'fas', 'fa-angle-down'];

    if (completedTasks.length !== 0) {
      classForIcon.push('wrap-icon__toggle-all_active');
    }

    return (
      <div className="App">
        <h1 className='title'>TO DO LIST APP</h1>
        <div className='container'>
          {this.state.tasks.length ? 
            (<div className='wrap-icon'>
              <i 
                className={classForIcon.join(' ')}
                onClick={this.onToggleAll}
              />
            </div>)
          : 
          null}
          <TodoForm 
            onClick={this.handelSubmit}
            onKeyDown={this.handelKeyDown}
            buttonRef={el => (this.buttonRef = el)}
            inputRef={el => (this.inputRef = el)}
            onChange={this.onChangeSelect}
            value={this.state.priority}
          />
        </div>
        <Route path='/' exact render={() => 
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
        }/>
        <Route path='/active' render={() => 
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
        }/>
        <Route path='/done' render={() => 
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
        }/>
        <TodoSort 
          handleButtonSortAscending={this.handleButtonSortAscending}
          handleButtonSortDescending={this.handleButtonSortDescending}
        />    
      </div>    
    );
  } 
  
}

export default App;
