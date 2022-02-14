import { badRequest } from '../../helpers/http-helpers'
import { RequiredFieldsValidation } from '../../helpers/validators/required-fields-validation'
import { ValidationComposite } from '../../helpers/validators/validation-composite'
import { Controller } from '../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../protocols/http'

export class SignUpController implements Controller {
  handle(httpRequest: HttpRequest): HttpResponse {
    const validationComposite = new ValidationComposite(new RequiredFieldsValidation())
    const error = validationComposite.validate(httpRequest.body)

    if (error) {
      return badRequest(error)
    }
  }
}
