import { ITask } from '@domain/models/task/ITask'
import { ICreateTaskModel } from '@domain/usecases/task/ICreateTask'

export interface ICreateTaskRepository {
  create(task: ICreateTaskModel): Promise<ITask>
}
