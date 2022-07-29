import { DbFindTaskById } from '@database/usecases/task/DbFindTaskById'
import { DbUpdateTask } from '@database/usecases/task/DbUpdateTask'
import { TaskPostgreRepository } from '@infra/database/tasks/TaskPostgresRepository'
import { AppPostgreDataSource } from '@main/database/data-source'
import { UpdateTaskController } from '@presentation/controllers/task/UpdateTaskController'

export const makeUpdateTaskController = (): UpdateTaskController => {
  const taskPostgreRepository = new TaskPostgreRepository(AppPostgreDataSource)
  const dbUpdateTask = new DbUpdateTask(taskPostgreRepository)
  const dbFindTaskById = new DbFindTaskById(taskPostgreRepository)
  return new UpdateTaskController(dbUpdateTask, dbFindTaskById)
}
