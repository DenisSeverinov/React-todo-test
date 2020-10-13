import React, { Component } from 'react';
import './App.scss';
import TodoList from './Components/TodoList/TodoList'
import TodoForm from './Components/TodoForm/TodoForm'
import TodoFilter from './Components/TodoFilter/TodoFilter'
// import TodoPriority from './Components/TodoPriority/TodoPriority'
import { Route } from 'react-router-dom'

class App extends Component {

  state = {
    tasks: []
  }

  toggle = id => {
    let tasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    })
    this.setState({tasks});
  }

  handelSubmit = () => {
    const input = document.querySelector('.form__text');
    
    if (input.value.trim()) {

      const newTodo = {
        id: this.generationId(),
        title: input.value,
        completed: false
      }

      input.value = '';
      let tasks = this.state.tasks;
         
      tasks.push(newTodo);

      this.setState({tasks});
    }
  }

  onDelete = id => {
    let tasks = this.state.tasks.filter(task => {
      if (task.id !== id) {
        return task;
      } else {
        return null;
      }
    })
    this.setState({tasks});
  }

  handelKeyDown = e => {
    if (e.keyCode === 13) {
      document.querySelector('.form__button').click();
    }
  }

  handelBlur = (text, id) => {
    
    let tasks = this.state.tasks.map(task => {

      if (task.id === id && text.trim() !== '') {
        task.title = text;
      } 

      return task;
    })
  
    this.setState({tasks});
  }

  toggleAll = () => {
    
    let tasks = this.state.tasks;
    if (tasks.find(task => !task.completed)) {

    tasks = tasks.map(task => {
      if (!task.completed) {
        task.completed = !task.completed;
      }

      return task;
    })
  
    } else {
      tasks = tasks.map(task => {
        if (task.completed) {
          task.completed = !task.completed;
        }

        return task;
      })
    
    }
    
    this.setState({tasks});
  }

  clearCompletedTasks = () => {
    let tasks = this.state.tasks.filter(task => !task.completed);
    this.setState({tasks});
  }

  generationId() {
    return Math.random().toString(36).substr(2, 9);
  }

  componentDidMount() {
   const tasks = JSON.parse(localStorage.getItem('tasks'));
   this.setState({tasks});
  }

  componentDidUpdate() {
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    document.querySelector('.form__text').focus();
  }

  render() {
    console.log(this.state.tasks);

    const completedTasks = this.state.tasks.filter(task => task.completed);
    const activeTasks = this.state.tasks.filter(task => !task.completed);
    
    let classForIcon = ['wrap-icon__toggle-all', 'fas', 'fa-angle-down'];

    if (completedTasks.length !== 0) {
      classForIcon.push('wrap-icon__toggle-all_active');
    }
    
    return (
      <div className="App">
        <h1 className='title'>TO DO LIST APP</h1>
        <TodoForm 
          onClick={this.handelSubmit}
          onKeyDown={this.handelKeyDown}
        />
        {this.state.tasks.length ? 
          (<div className='wrap-icon'>
            <i 
              className={classForIcon.join(' ')}
              onClick={this.toggleAll}
            />
          </div>)
          : 
          null}
          
        <Route path='/' exact render={() => 
          <TodoList 
            onChange={this.toggle} 
            onClick={this.onDelete}
            onBlur={this.handelBlur}
            tasks={this.state.tasks} 
          />
        }/>
        <Route path='/active' render={() => 
          <TodoList 
            onChange={this.toggle} 
            onClick={this.onDelete}
            onBlur={this.onBlurHandler}
            tasks={activeTasks} 
          />
        }/>
        <Route path='/done' render={() => 
          <TodoList 
            onChange={this.toggle} 
            onClick={this.onDelete}
            onBlur={this.onBlurHandler}
            tasks={completedTasks} 
          />
        }/>
        {/* <TodoPriority /> */}
        <TodoFilter 
          tasks={this.state.tasks}
          onClick={this.clearCompletedTasks}
        />

      </div>
    );
  } 
  
}

export default App;
