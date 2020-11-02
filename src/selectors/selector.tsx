import { IInitialState } from 'interfaces/interfaces'
import { createSelector } from 'reselect'

const getTasks = (state: IInitialState) => state.tasks
const getPriority = (state: IInitialState) => state.priority
const getInputValue = (state: IInitialState) => state.inputValue

export const getTasksSelector = createSelector(getTasks, tasks => tasks)
export const getPrioritySelector = createSelector(getPriority, priority => priority)
export const getInputValueSelector = createSelector(getInputValue, inputValue => inputValue)
