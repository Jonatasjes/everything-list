import { ILoadAllTasksRepository } from '@database/protocols/task/ITaskRepository'
import { ITask } from '@domain/models/task/ITask'
import { ILoadAllTasks } from '@domain/usecases/task/ILoadAllTasks'

export class DbLoadAllTasks implements ILoadAllTasks {
  private readonly loadAllTasksRepository: ILoadAllTasksRepository

  constructor(loadAllTasksRepository: ILoadAllTasksRepository) {
    this.loadAllTasksRepository = loadAllTasksRepository
  }

  async load(userId: string): Promise<ITask[]> {
    return await this.loadAllTasksRepository.load(userId)
  }
}
