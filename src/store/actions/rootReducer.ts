import React from 'react'
import { Task } from 'interfaces/interfaces'
import {
  ADD_TODO, EDIT_INPUT_VALUE,
  DELETE_TODO, TOGGLE_CHECKBOX,
  EDIT_TITLE, TOGGLE_ALL_CHECKBOX,
  DELETE_COMPLETED_TASKS, EDIT_TODO,
  REMOVE_FOCUS_SELECT, SORT_ASCENDING,
  SORT_DESCENDING, TAKE_FROM_LOCAL_STORAGE,
} from './actionTypes'

export function addTodo(title: string, id: string) {
  return {
    type: ADD_TODO,
    payload: { title, id },
  }
}
export function editInputValue(value: string) {
  return {
    type: EDIT_INPUT_VALUE,
    payload: value,
  }
}
export function deleteTodo(id: string) {
  return {
    type: DELETE_TODO,
    payload: id,
  }
}
export function toggleCheckbox(id: string) {
  return {
    type: TOGGLE_CHECKBOX,
    payload: id,
  }
}
export function editTitle(title: string, id: string) {
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
export function editTodo(id: string) {
  return {
    type: EDIT_TODO,
    payload: id,
  }
}
export function removeFocusSelect(e: React.FocusEvent) {
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
export function takeFromLocalStorage(tasks: Task[]) {
  return {
    type: TAKE_FROM_LOCAL_STORAGE,
    payload: tasks,
  }
}
