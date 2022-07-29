import { DbCreateTask } from '@database/usecases/task/DbCreateTask'
import { DbFindByEmail } from '@database/usecases/user/DbFindByEmail'
import { TaskPostgreRepository } from '@infra/database/tasks/TaskPostgresRepository'
import { UserPostgreRepository } from '@infra/database/user/UserPostgresRepository'
import { AppPostgreDataSource } from '@main/database/data-source'
import { CreateTaskController } from '@presentation/controllers/task/CreateTaskController'
import { EmailValidation } from '@presentation/helpers/validators/email-validation'
import { EmailValidatorAdapter } from '@utils/email-validator-adapter'

export const makeCreateTaskController = (): CreateTaskController => {
  const emailValidator = new EmailValidation('email', new EmailValidatorAdapter())
  const userPostgreRepository = new UserPostgreRepository(AppPostgreDataSource)
  const taskPostgreRepository = new TaskPostgreRepository(AppPostgreDataSource)
  const dbFindByEmail = new DbFindByEmail(userPostgreRepository)
  const dbCreateTask = new DbCreateTask(taskPostgreRepository)

  return new CreateTaskController(emailValidator, dbFindByEmail, dbCreateTask)
}
