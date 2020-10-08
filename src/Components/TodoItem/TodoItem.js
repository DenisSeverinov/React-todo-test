import React, {Component} from 'react'
import './TodoItem.scss'
class TodoItem extends Component {
  
  constructor(props) {
    super(props)
    this.task = props.task
    this.onChange = props.onChange
    this.onClick = props.onClick
    this.onBlur = props.onBlur
    this.state = { isEdit: false } 
  }

  handelEdit = () => {  
    this.setState({isEdit: !this.state.isEdit});
  }

  handelClickBlur = () => {
    this.setState({isEdit: !this.state.isEdit});
  }
  
  handelKeyDownBlur(e) {
    if (e.keyCode === 13) {
      document.querySelector('.wrap__input').blur();
    }
  }

  getClassTask() {
    const classesForTask = ['item'];

    if (this.task.completed) {
      classesForTask.push('item_completed');
    }
    
    return classesForTask.join(' ');
  }

  getClassIcon() {
    const classesForIcon = ['item__label', 'far'];

    if (this.task.completed) {
      classesForIcon.push('fa-check-circle');
    } else {
      classesForIcon.push('fa-circle');
    }

    return classesForIcon.join(' ');
  }
  

  render() {
    
    return this.state.isEdit ? 
      (<div className='wrap'>
        <input 
          className='wrap__input' 
          type='text'
          defaultValue={this.task.title}
          onKeyDown={(e) => this.handelKeyDownBlur(e)}
          onBlur={() => {
            this.handelClickBlur();
            this.onBlur(document.querySelector('.wrap__input').value, this.task.id)
          }
          }
          autoFocus
        />
      </div>) 
      : 
      (
        <li className={this.getClassTask()}>
          <label className={this.getClassIcon()} htmlFor={this.task.id} />
          <input className='item__checkbox' id={this.task.id} type='checkbox' onChange={() => this.onChange(this.task.id)} />
          
            <span 
              className='item__text'
              onDoubleClick={this.handelEdit}
            >
              {this.task.title}
            </span>
          <i className="item__icon fas fa-trash-alt" onClick={() => this.onClick(this.task.id)}/>
        </li>
      )
    
  }
}

export default TodoItem