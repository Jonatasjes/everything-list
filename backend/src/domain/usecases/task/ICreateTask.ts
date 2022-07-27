import { ITask } from '@domain/models/task/ITask'

export interface ICreateTaskModel {
  message: string
  userId: string
}

export interface ICreateTask {
  create(task: ICreateTaskModel): Promise<ITask>
}
