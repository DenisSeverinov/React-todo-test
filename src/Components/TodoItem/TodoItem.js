import React, {Component} from 'react'
import './TodoItem.scss'
class TodoItem extends Component {
  
  state = {
    isEdit: false
  }

  handleEdit = () => {  
    this.setState({isEdit: !this.state.isEdit});
  }
  
  handleClickKeyDown(e) {
    if (e.keyCode === 13) {
      this.props.handleEditTitle(e.target.value, this.props.task.id)
      this.setState({isEdit: !this.state.isEdit})
    }
  }

  getClassTask() {
    const classesForTask = ['item'];

    if (this.props.task.completed) {
      classesForTask.push('item_completed');
    }
    
    switch(this.props.task.priority) {
      case '1': 
        classesForTask.push('high')
        break;
      case '2':
        classesForTask.push('medium')
        break;
      case '3':
        classesForTask.push('low')
        break;
      default:
        break
    }

    return classesForTask.join(' ');
  }

  getClassIcon() {
    const classesForIcon = ['item__label', 'far'];

    if (this.props.task.completed) {
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
          ref={this.inputRef}
          defaultValue={this.props.task.title}
          onKeyDown={this.handleClickKeyDown.bind(this)}
          autoFocus
        />
      </div>) 
      : 
      (
        <li className={this.getClassTask()}>
          <label className={this.getClassIcon()} htmlFor={this.props.task.id} />
          <input 
            className='item__checkbox' 
            type='checkbox' 
            id={this.props.task.id} 
            onChange={this.props.onChange.bind(this, this.props.task.id)} 
          />
            <span 
              className='item__text'
              onDoubleClick={this.handleEdit}
            >
              {this.props.task.title}
            </span>
          <i 
            className="item__icon fas fa-trash-alt" 
            onClick={this.props.onClick.bind(this, this.props.task.id)}/>
        </li>
      )
    
  }
}

export default TodoItem