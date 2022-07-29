import { ITask } from '@domain/models/task/ITask'

export interface IFindTaskById {
  findById(taskId: string): Promise<ITask>
}
