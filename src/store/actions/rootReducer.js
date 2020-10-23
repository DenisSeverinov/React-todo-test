import {
  ADD_TODO, EDIT_INPUT_VALUE,
  DELETE_TODO, TOGGLE_CHECKBOX,
  EDIT_TITLE, TOGGLE_ALL_CHECKBOX,
  DELETE_COMPLETED_TASKS, EDIT_TODO,
  REMOVE_FOCUS_SELECT, SORT_ASCENDING,
  SORT_DESCENDING, TAKE_FROM_LOCAL_STORAGE,
} from './actionTypes'

export function addTodo(title, id) {
  return {
    type: ADD_TODO,
    payload: { title, id },
  }
}
export function editInputValue(value) {
  return {
    type: EDIT_INPUT_VALUE,
    payload: value,
  }
}
export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id,
  }
}
export function toggleCheckbox(id) {
  return {
    type: TOGGLE_CHECKBOX,
    payload: id,
  }
}
export function editTitle(title, id) {
  return {
    type: EDIT_TITLE,
    payload: { title, id },
  }
}
export function toggleAllCheckbox() {
  return {
    type: TOGGLE_ALL_CHECKBOX,
  }
}
export function deleteCompletedTasks() {
  return {
    type: DELETE_COMPLETED_TASKS,
  }
}
export function editTodo(id) {
  return {
    type: EDIT_TODO,
    payload: id,
  }
}
export function removeFocusSelect(e) {
  return {
    type: REMOVE_FOCUS_SELECT,
    payload: e,
  }
}
export function sortAscending() {
  return {
    type: SORT_ASCENDING,
  }
}
export function sortDescending() {
  return {
    type: SORT_DESCENDING,
  }
}
export function takeFromLocalStorage(tasks) {
  return {
    type: TAKE_FROM_LOCAL_STORAGE,
    payload: tasks,
  }
}
