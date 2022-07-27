import { ICreateUser } from '@domain/usecases/user/ICreateUser'
import { IFindByEmailRepository } from '@database/protocols/user/IUsersRepository'
import { badRequest, ok, serverError } from '../../helpers/http-helpers'
import { UserAlreadyExistsError } from '../../errors/user-already-exists-error'
import { Validation } from '../../helpers/validators/validation'
import { Controller } from '../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../protocols/http'

export class SignUpController implements Controller {
  private readonly validation: Validation
  private readonly createUser: ICreateUser
  private readonly findByEmail: IFindByEmailRepository
  constructor(
    validation: Validation,
    createUser: ICreateUser,
    findByEmail: IFindByEmailRepository,
  ) {
    this.validation = validation
    this.createUser = createUser
    this.findByEmail = findByEmail
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = await this.validation.validate(httpRequest.body)

      if (error) {
        return badRequest(error)
      }

      const { username, name, email, password, tasks } = httpRequest.body

      const hasUser = await this.findByEmail.findByEmail(email)

      if (hasUser) {
        return badRequest(new UserAlreadyExistsError())
      }
      const User = await this.createUser.create({ username, name, email, password, tasks })

      return ok(User)
    } catch (error) {
      return serverError()
    }
  }
}
