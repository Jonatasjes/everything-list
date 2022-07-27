import { IFindUserByToken } from '@domain/usecases/user/IFindByUserToken'
import { UnauthorizedError } from '@presentation/errors/unauthorized-error'
import { badRequest, ok, serverError } from '@presentation/helpers/http-helpers'
import { HttpResponse } from '@presentation/protocols/http'
import { AuthToken, Middleware } from '@presentation/protocols/middleware'

export class AuthMiddleware implements Middleware {
  private findUserByToken: IFindUserByToken

  constructor(findByToken: IFindUserByToken) {
    this.findUserByToken = findByToken
  }
  async handle(httpRequest: AuthToken): Promise<HttpResponse> {
    try {
      const accessToken = httpRequest.headers.authorization

      if (accessToken) {
        const user = await this.findUserByToken.findByToken(accessToken)

        if (user) {
          return ok({ email: user.email })
        }
      }

      return badRequest(new UnauthorizedError())
    } catch (error) {
      return serverError()
    }
  }
}
