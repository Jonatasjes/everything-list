import { ICreateTask } from '@domain/usecases/task/ICreateTask'
import { IFindByEmail } from '@domain/usecases/user/IFindByEmail'
import { UnauthorizedError } from '@presentation/errors/unauthorized-error'
import { badRequest, ok, serverError } from '@presentation/helpers/http-helpers'
import { EmailValidation } from '@presentation/helpers/validators/email-validation'
import { Controller } from '@presentation/protocols/controller'
import { HttpRequest, HttpResponse } from '@presentation/protocols/http'

export class CreateTaskController implements Controller {
  private readonly emailValidator: EmailValidation
  private readonly findByEmail: IFindByEmail
  private readonly createTask: ICreateTask

  constructor(emailValidator: EmailValidation, findByEmail: IFindByEmail, createTask: ICreateTask) {
    this.emailValidator = emailValidator
    this.findByEmail = findByEmail
    this.createTask = createTask
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { message } = httpRequest.body
      const { email } = httpRequest.user

      const emailIsNotValid = this.emailValidator.validate(email)

      if (emailIsNotValid) {
        return badRequest(emailIsNotValid)
      }

      const user = await this.findByEmail.findByEmail(email)

      if (user) {
        const task = {
          email: email,
          message: message,
          userId: user.id,
        }

        const newTask = await this.createTask.create(task)

        return ok(newTask)
      }

      return badRequest(new UnauthorizedError())
    } catch (error) {
      return serverError()
    }
  }
}
