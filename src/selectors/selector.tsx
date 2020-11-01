import { InitialState } from 'interfaces/interfaces'
import { createSelector } from 'reselect'

const getTasks = (state: InitialState) => state.tasks
const getPriority = (state: InitialState) => state.priority
const getInputValue = (state: InitialState) => state.inputValue

export const getTasksSelector = createSelector(getTasks, tasks => tasks)
export const getPrioritySelector = createSelector(getPriority, priority => priority)
export const getInputValueSelector = createSelector(getInputValue, inputValue => inputValue)
