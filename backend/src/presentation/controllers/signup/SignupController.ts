import { ICreateUser } from '@domain/usecases/user/ICreateUser'
import { IFindByEmail } from '@domain/usecases/user/IFindByEmail'
import { badRequest, ok, serverError } from '@presentation/helpers/http-helpers'
import { UserAlreadyExistsError } from '@presentation/errors/user-already-exists-error'
import { Validation } from '@presentation/helpers/validators/validation'
import { Controller } from '@presentation/protocols/controller'
import { HttpRequest, HttpResponse } from '@presentation/protocols/http'
import { IFindByUsername } from '@domain/usecases/user/IFindByUsername'

export class SignUpController implements Controller {
  private readonly validation: Validation
  private readonly createUser: ICreateUser
  private readonly findByEmail: IFindByEmail
  private readonly findByUsername: IFindByUsername
  constructor(
    validation: Validation,
    createUser: ICreateUser,
    findByEmail: IFindByEmail,
    findByUsername: IFindByUsername,
  ) {
    this.validation = validation
    this.createUser = createUser
    this.findByEmail = findByEmail
    this.findByUsername = findByUsername
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = await this.validation.validate(httpRequest.body)

      if (error) {
        return badRequest(error)
      }

      const { username, name, email, password, tasks } = httpRequest.body

      const hasEmail = await this.findByEmail.findByEmail(email)
      const hasUsername = await this.findByUsername.findByUsername(username)

      if (hasEmail || hasUsername) {
        return badRequest(new UserAlreadyExistsError())
      }

      const User = await this.createUser.create({ username, name, email, password, tasks })

      return ok(User)
    } catch (error) {
      return serverError()
    }
  }
}
