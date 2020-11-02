import React from 'react'
import { Dispatch } from 'redux'
import './TodoSort.scss'
import { connect } from 'react-redux'
import { sortAscending, sortDescending } from 'store/actions/rootReducer'

type TodoSortProps = {
  sortAscending: () => void,
  sortDescending: () => void,
}

const TodoSort = (props: TodoSortProps) => (
  <div className='wrap-sort'>
    <button className='wrap-sort__button' type='button' onClick={props.sortAscending}>Sort ascending</button>
    <button className='wrap-sort__button' type='button' onClick={props.sortDescending}>Sort descending</button>
  </div>
)

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    sortAscending: () => dispatch(sortAscending()),
    sortDescending: () => dispatch(sortDescending()),
  }
}

export default connect(null, mapDispatchToProps)(TodoSort)
