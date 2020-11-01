export interface Task {
  id: string,
  title: string,
  completed: boolean,
  isEdit: boolean,
  priority: string,
}

export interface InitialState {
  tasks: Task[]
  priority: string,
  inputValue: string,
}
