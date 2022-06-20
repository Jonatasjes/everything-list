import { AddAccount } from '../../../domain/usecases/add-account'
import { badRequest, ok, serverError } from '../../helpers/http-helpers'
import { Validation } from '../../helpers/validators/validation'
import { Controller } from '../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../protocols/http'

export class SignUpController implements Controller {
  private readonly validation: Validation
  private readonly addAccount: AddAccount
  constructor(validation: Validation, addAccount: AddAccount) {
    this.validation = validation
    this.addAccount = addAccount
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = await this.validation.validate(httpRequest.body)

      if (error) {
        return badRequest(error)
      }

      const { username, name, email, password } = httpRequest.body

      const account = await this.addAccount.add({ username, name, email, password })

      return ok(account)
    } catch (error) {
      if (error.code && error.code == '23505') {
        const err = {
          name: 'Key already exist',
          message: error.detail,
        }
        return badRequest(err)
      }

      return serverError()
    }
  }
}
