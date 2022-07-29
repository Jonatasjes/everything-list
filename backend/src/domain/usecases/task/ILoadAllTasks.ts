import { ITask, Status } from '@domain/models/task/ITask'

export interface ILoadAllTasksModel {
  userId: string
  page: number
  limit: number
  status?: Status
}

export interface ILoadAllTasks {
  load(loadAllTasksModel: ILoadAllTasksModel): Promise<ITask[]>
}
