import { ITask } from '@domain/models/task/ITask'

export interface ILoadAllTasks {
  load(userId: string): Promise<ITask[]>
}
