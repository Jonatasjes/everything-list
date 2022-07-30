import { DbCreateTask } from '@database/usecases/task/DbCreateTask'
import { TaskPostgreRepository } from '@infra/database/tasks/TaskPostgresRepository'
import { AppPostgreDataSource } from '@main/database/data-source'
import { CreateTaskController } from '@presentation/controllers/task/CreateTaskController'
import { TypeDateValidation } from '@presentation/helpers/validators/type-date-validation'

export const makeCreateTaskController = (): CreateTaskController => {
  const taskPostgreRepository = new TaskPostgreRepository(AppPostgreDataSource)
  const dbCreateTask = new DbCreateTask(taskPostgreRepository)
  const typeDateValidation = new TypeDateValidation()

  return new CreateTaskController(typeDateValidation, dbCreateTask)
}
