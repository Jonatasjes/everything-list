import { MissingParamError } from '../../errors/missing-param-error'
import { badRequest } from '../../helpers/http-helpers'
import { Controller } from '../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../protocols/http'

export class SignUpController implements Controller {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['username', 'name', 'email', 'password', 'passwordConfirmation']
    const missingField = requiredFields.filter(field => !httpRequest.body[field])
    if (missingField[0]) {
      return badRequest(new MissingParamError(missingField[0]))
    }
  }
}
