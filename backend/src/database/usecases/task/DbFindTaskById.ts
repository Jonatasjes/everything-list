import { IFindTaskByIdRepository } from '@database/protocols/task/ITaskRepository'
import { ITask } from '@domain/models/task/ITask'
import { IFindTaskById } from '@domain/usecases/task/IFindTaskById'

export class DbFindTaskById implements IFindTaskById {
  private readonly findTaskByIdRespository: IFindTaskByIdRepository

  constructor(findTaskByIdRespository: IFindTaskByIdRepository) {
    this.findTaskByIdRespository = findTaskByIdRespository
  }

  async findById(taskId: string): Promise<ITask> {
    return await this.findTaskByIdRespository.findById(taskId)
  }
}
