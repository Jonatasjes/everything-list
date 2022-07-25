import { IAuthentication } from '@domain/usecases/user/IAuthentication'
import { ok, badRequest, serverError, unauthorized } from '@presentation/helpers/http-helpers'
import { EmailValidation } from '@presentation/helpers/validators/email-validation'
import { Controller } from '@presentation/protocols/controller'
import { HttpRequest, HttpResponse } from '@presentation/protocols/http'

export class LoginController implements Controller {
  private readonly emailValidator: EmailValidation
  private readonly authentication: IAuthentication

  constructor(emailValidator: EmailValidation, authentication: IAuthentication) {
    this.emailValidator = emailValidator
    this.authentication = authentication
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { email, password } = httpRequest.body

      const emailIsValid = this.emailValidator.validate(email)

      if (emailIsValid) {
        return badRequest(emailIsValid)
      }

      const params = {
        email,
        password,
      }

      const authenticationResponse = await this.authentication.auth(params)

      if (authenticationResponse) {
        return ok(authenticationResponse)
      }

      return unauthorized()
    } catch (error) {
      return serverError()
    }
  }
}
