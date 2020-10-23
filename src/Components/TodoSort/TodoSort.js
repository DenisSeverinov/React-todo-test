import React from 'react'
import './TodoSort.scss'
import { connect } from 'react-redux'
import { sortAscending, sortDescending } from 'store/actions/rootReducer'
import PropTypes from 'prop-types'

const TodoSort = props => (
  <div className='wrap-sort'>
    <button className='wrap-sort__button' type='button' onClick={props.sortAscending}>Sort ascending</button>
    <button className='wrap-sort__button' type='button' onClick={props.sortDescending}>Sort descending</button>
  </div>
)

TodoSort.propTypes = {
  sortAscending: PropTypes.func.isRequired,
  sortDescending: PropTypes.func.isRequired,
}

function mapDispatchToProps(dispatch) {
  return {
    sortAscending: () => dispatch(sortAscending()),
    sortDescending: () => dispatch(sortDescending()),
  }
}

export default connect(null, mapDispatchToProps)(TodoSort)
