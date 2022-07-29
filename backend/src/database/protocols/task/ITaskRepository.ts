import { ITask } from '@domain/models/task/ITask'
import { ICreateTaskModel } from '@domain/usecases/task/ICreateTask'
import { IUpdateInputs } from '@domain/usecases/task/IUpdateTask'

export interface ICreateTaskRepository {
  create(task: ICreateTaskModel): Promise<ITask>
}
export interface ILoadAllTasksRepository {
  load(userId: string): Promise<ITask[]>
}

export interface IFindTaskByIdRepository {
  findById(taskId: string): Promise<ITask>
}

export interface IUpdateTaskRepository {
  update(updateInputs: IUpdateInputs): Promise<ITask>
}
