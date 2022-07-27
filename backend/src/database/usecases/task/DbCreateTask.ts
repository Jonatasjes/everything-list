import { ICreateTaskRepository } from '@database/protocols/task/ITaskRepository'
import { ITask } from '@domain/models/task/ITask'
import { ICreateTask, ICreateTaskModel } from '@domain/usecases/task/ICreateTask'

export class DbCreateTask implements ICreateTask {
  private readonly createTaskRepository: ICreateTaskRepository

  constructor(createTaskRepository: ICreateTaskRepository) {
    this.createTaskRepository = createTaskRepository
  }

  async create(task: ICreateTaskModel): Promise<ITask> {
    return await this.createTaskRepository.create(task)
  }
}
