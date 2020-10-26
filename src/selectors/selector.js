import { createSelector } from 'reselect'

const getTasks = state => state.tasks
const getPriority = state => state.priority
const getInputValue = state => state.inputValue

export const getTasksSelector = createSelector(getTasks, tasks => tasks)
export const getPrioritySelector = createSelector(getPriority, priority => priority)
export const getInputValueSelector = createSelector(getInputValue, inputValue => inputValue)
