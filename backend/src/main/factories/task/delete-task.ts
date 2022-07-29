import { DbDeleteTask } from '@database/usecases/task/DbDeleteTask'
import { TaskPostgreRepository } from '@infra/database/tasks/TaskPostgresRepository'
import { AppPostgreDataSource } from '@main/database/data-source'
import { DeleteTaskController } from '@presentation/controllers/task/DeleteTaskController'

export const makeDeleteTaskController = (): DeleteTaskController => {
  const taskPostgreRepository = new TaskPostgreRepository(AppPostgreDataSource)
  const dbDeleteTask = new DbDeleteTask(taskPostgreRepository)
  return new DeleteTaskController(dbDeleteTask)
}
