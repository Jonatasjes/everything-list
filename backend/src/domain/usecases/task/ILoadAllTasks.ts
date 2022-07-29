import { ITask } from '@domain/models/task/ITask'

export interface ILoadAllTasksModel {
  userId: string
  page: number
  limit: number
}

export interface ILoadAllTasks {
  load(loadAllTasksModel: ILoadAllTasksModel): Promise<ITask[]>
}
