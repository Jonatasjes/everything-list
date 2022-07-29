import { IUpdateTaskRepository } from '@database/protocols/task/ITaskRepository'
import { ITask } from '@domain/models/task/ITask'
import { IUpdateInputs, IUpdateTask } from '@domain/usecases/task/IUpdateTask'

export class DbUpdateTask implements IUpdateTask {
  private readonly updateTaskRepository: IUpdateTaskRepository

  constructor(updateTaskRepository: IUpdateTaskRepository) {
    this.updateTaskRepository = updateTaskRepository
  }

  async update(updateInputs: IUpdateInputs): Promise<ITask> {
    return this.updateTaskRepository.update(updateInputs)
  }
}
