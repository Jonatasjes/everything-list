import { DbFindByEmail } from '@database/usecases/user/DbFindByEmail'
import { DbFindUserByToken } from '@database/usecases/user/DbFindUserByToken'
import { JwtAdapter } from '@infra/criptography/JwtAdapter'
import { UserPostgreRepository } from '@infra/database/user/UserPostgresRepository'
import env from '@main/config/env'
import { AppPostgreDataSource } from '@main/database/data-source'
import { AuthMiddleware } from '@presentation/middlewares/authentication/AuthMiddleware'

export const makeAuthMiddlewareController = (): AuthMiddleware => {
  const decrypter = new JwtAdapter(env.jwt_key)
  const userPostgreRepository = new UserPostgreRepository(AppPostgreDataSource)
  const dbFindByEmail = new DbFindByEmail(userPostgreRepository)
  const findUserByToken = new DbFindUserByToken(decrypter, dbFindByEmail)
  return new AuthMiddleware(findUserByToken)
}
