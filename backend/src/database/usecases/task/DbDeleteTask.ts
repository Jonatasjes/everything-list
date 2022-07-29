import { IDeleteTaskRepository } from '@database/protocols/task/ITaskRepository'
import { IDeleteTask } from '@domain/usecases/task/IDeleteTask'

export class DbDeleteTask implements IDeleteTask {
  private readonly deleteTaskRespository: IDeleteTaskRepository

  constructor(deleteTaskRespository: IDeleteTaskRepository) {
    this.deleteTaskRespository = deleteTaskRespository
  }

  async delete(taskId: string): Promise<void> {
    return await this.deleteTaskRespository.delete(taskId)
  }
}
