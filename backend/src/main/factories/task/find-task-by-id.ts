import { DbFindTaskById } from '@database/usecases/task/DbFindTaskById'
import { TaskPostgreRepository } from '@infra/database/user/TaskPostgresRepository'
import { AppPostgreDataSource } from '@main/database/data-source'
import { FindTaskByIdController } from '@presentation/controllers/task/FindTaskByIdController'

export const makeFindTaskByIdController = (): FindTaskByIdController => {
  const taskPostgreRepository = new TaskPostgreRepository(AppPostgreDataSource)
  const dbFindTaskById = new DbFindTaskById(taskPostgreRepository)
  return new FindTaskByIdController(dbFindTaskById)
}
