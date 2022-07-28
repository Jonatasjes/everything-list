import { DbLoadAllTasks } from '@database/usecases/task/DbLoadAllTasks'
import { TaskPostgreRepository } from '@infra/database/user/TaskPostgresRepository'
import { AppPostgreDataSource } from '@main/database/data-source'
import { LoadAllTasksController } from '@presentation/controllers/task/LoadAllTasksController'

export const makeLoadAllTasksController = (): LoadAllTasksController => {
  const taskPostgreRepository = new TaskPostgreRepository(AppPostgreDataSource)
  const dbLoadAllTasks = new DbLoadAllTasks(taskPostgreRepository)
  return new LoadAllTasksController(dbLoadAllTasks)
}
