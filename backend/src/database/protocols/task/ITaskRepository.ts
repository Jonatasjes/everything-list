import { ITask } from '@domain/models/task/ITask'
import { ICreateTaskModel } from '@domain/usecases/task/ICreateTask'
import { ILoadAllTasksModel } from '@domain/usecases/task/ILoadAllTasks'
import { IUpdateInputs } from '@domain/usecases/task/IUpdateTask'

export interface ICreateTaskRepository {
  create(task: ICreateTaskModel): Promise<ITask>
}
export interface ILoadAllTasksRepository {
  load(loadAllTasksModel: ILoadAllTasksModel): Promise<ITask[]>
}

export interface IFindTaskByIdRepository {
  findById(taskId: string): Promise<ITask>
}

export interface IUpdateTaskRepository {
  update(updateInputs: IUpdateInputs): Promise<ITask>
}

export interface IDeleteTaskRepository {
  delete(taskId: string): Promise<void>
}
