export interface ITask {
  id: string,
  title: string,
  completed: boolean,
  isEdit: boolean,
  priority: string,
}

export interface IInitialState {
  tasks: ITask[]
  priority: string,
  inputValue: string,
}
