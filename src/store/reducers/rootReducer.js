import {
  ADD_TODO, EDIT_INPUT_VALUE,
  DELETE_TODO, TOGGLE_CHECKBOX,
  EDIT_TITLE, TOGGLE_ALL_CHECKBOX,
  DELETE_COMPLETED_TASKS, EDIT_TODO,
  REMOVE_FOCUS_SELECT, SORT_ASCENDING,
  SORT_DESCENDING, TAKE_FROM_LOCAL_STORAGE,
} from 'store/actions/actionTypes'

const initialState = {
  tasks: [],
  priority: '2',
  inputValue: '',
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        inputValue: '',
        tasks: state.tasks.concat([{
          id: action.payload.id,
          title: action.payload.title,
          completed: false,
          isEdit: false,
          priority: state.priority,
        }]),
      }
    case EDIT_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload,
      }
    case DELETE_TODO:
      return {
        ...state,
        tasks: state.tasks.filter(task => {
          if (task.id !== action.payload) {
            return task;
          }
          return null;
        }),
      }
    case TOGGLE_CHECKBOX:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload) {
            return { ...task, completed: !task.completed }
          }
          return task
        }),
      }
    case EDIT_TITLE:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.id && action.payload.title.trim() !== '') {
            return { ...task, title: action.payload.title }
          }
          return task
        }),
      }
    case TOGGLE_ALL_CHECKBOX:
      return {
        ...state,
        tasks: [
          ...state.tasks.find(task => !task.completed)
            ? state.tasks.map(task => {
              if (!task.completed) {
                return { ...task, completed: !task.completed }
              }
              return task
            })
            : state.tasks.map(task => {
              if (task.completed) {
                return { ...task, completed: !task.completed }
              }
              return task
            }),
        ],
      }
    case DELETE_COMPLETED_TASKS:
      return {
        ...state,
        tasks: state.tasks.filter(task => !task.completed),
      }
    case EDIT_TODO:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload) {
            return { ...task, isEdit: !task.isEdit }
          }
          return task
        }),
      }
    case REMOVE_FOCUS_SELECT:
      return {
        ...state,
        priority: action.payload.target.value,
      }
    case SORT_ASCENDING:
      return {
        ...state,
        tasks: [...state.tasks].sort((a, b) => a.priority - b.priority),
      }
    case SORT_DESCENDING:
      return {
        ...state,
        tasks: [...state.tasks].sort((a, b) => b.priority - a.priority),
      }
    case TAKE_FROM_LOCAL_STORAGE:
      return {
        ...state,
        tasks: action.payload || [],
      }
    default:
      return state
  }
}
