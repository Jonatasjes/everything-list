import { DataSource } from 'typeorm'
import {
  ICreateTaskRepository,
  ILoadAllTasksRepository,
} from '@database/protocols/task/ITaskRepository'
import { ICreateTaskModel } from '@domain/usecases/task/ICreateTask'
import { ITask } from '@domain/models/task/ITask'
import { Task } from '@main/database/models/Task'
import { User } from '@main/database/models/User'

export class TaskPostgreRepository implements ICreateTaskRepository, ILoadAllTasksRepository {
  private readonly appPostgreDataSource: DataSource

  constructor(appPostgreDataSource: DataSource) {
    this.appPostgreDataSource = appPostgreDataSource
  }

  async create(taskData: ICreateTaskModel): Promise<ITask> {
    const result = await this.appPostgreDataSource
      .createQueryBuilder()
      .relation(User, 'tasks')
      .of(taskData.userId)
      .insert()
      .into(Task)
      .values([taskData])
      .execute()

    const task = await this.appPostgreDataSource
      .getRepository(Task)
      .createQueryBuilder('task')
      .where('task.id = :id', { id: result.identifiers[0].id })
      .getOne()

    return task
  }

  async load(userId: string): Promise<ITask[]> {
    const tasks = await this.appPostgreDataSource
      .createQueryBuilder()
      .relation(User, 'tasks')
      .of(userId)
      .loadMany()

    return tasks
  }
}
