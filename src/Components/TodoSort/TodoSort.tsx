import React, { Dispatch } from 'react'
import './TodoSort.scss'
import { connect } from 'react-redux'
import { sortAscending, sortDescending } from 'store/actions/rootReducer'

type TodoSortProps = {
  sortAscending: () => void,
  sortDescending: () => void,
}

const TodoSort: React.FC<TodoSortProps> = props => (
  <div className='wrap-sort'>
    <button className='wrap-sort__button' type='button' onClick={props.sortAscending}>Sort ascending</button>
    <button className='wrap-sort__button' type='button' onClick={props.sortDescending}>Sort descending</button>
  </div>
)

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    sortAscending: () => dispatch(sortAscending()),
    sortDescending: () => dispatch(sortDescending()),
  }
}

export default connect(null, mapDispatchToProps)(TodoSort)
