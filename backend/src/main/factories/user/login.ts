import { DbAuthentication } from '@database/usecases/user/DbAuthentication'
import { DbFindByEmail } from '@database/usecases/user/DbFindByEmail'
import { BcryptAdapter } from '@infra/criptography/BcryptAdapter'
import { JwtAdapter } from '@infra/criptography/JwtAdapter'
import { UserPostgreRepository } from '@infra/database/user/UserPostgresRepository'
import env from '@main/config/env'
import { AppPostgreDataSource } from '@main/database/data-source'
import { LoginController } from '@presentation/controllers/login/LoginController'
import { EmailValidation } from '@presentation/helpers/validators/email-validation'
import { EmailValidatorAdapter } from '@utils/email-validator-adapter'

export const makeLoginController = (): LoginController => {
  const emailValidator = new EmailValidation('email', new EmailValidatorAdapter())
  const userPostgreRepository = new UserPostgreRepository(AppPostgreDataSource)
  const dbFindByEmail = new DbFindByEmail(userPostgreRepository)
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const jwtAdapter = new JwtAdapter(env.jwt_key)
  const dbAuthentication = new DbAuthentication(dbFindByEmail, bcryptAdapter, jwtAdapter)
  return new LoginController(emailValidator, dbAuthentication)
}
