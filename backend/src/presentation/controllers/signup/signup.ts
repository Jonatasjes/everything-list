import { badRequest } from '../../helpers/http-helpers'
import { Validation } from '../../helpers/validators/validation'
import { Controller } from '../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../protocols/http'

export class SignUpController implements Controller {
  private readonly validation: Validation
  constructor(validation: Validation) {
    this.validation = validation
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = await this.validation.validate(httpRequest.body)

    if (error) {
      return badRequest(error)
    }
  }
}
