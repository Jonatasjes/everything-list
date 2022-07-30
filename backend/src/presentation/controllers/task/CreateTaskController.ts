import { ICreateTask } from '@domain/usecases/task/ICreateTask'
import { IFindByEmail } from '@domain/usecases/user/IFindByEmail'
import { MissingParamError } from '@presentation/errors/missing-param-error'
import { UnauthorizedError } from '@presentation/errors/unauthorized-error'
import { badRequest, created, serverError } from '@presentation/helpers/http-helpers'
import { EmailValidation } from '@presentation/helpers/validators/email-validation'
import { Validation } from '@presentation/helpers/validators/validation'
import { Controller } from '@presentation/protocols/controller'
import { HttpRequest, HttpResponse } from '@presentation/protocols/http'

export class CreateTaskController implements Controller {
  private readonly typeDateValidation: Validation
  private readonly createTask: ICreateTask

  constructor(typeDateValidation: Validation, createTask: ICreateTask) {
    this.typeDateValidation = typeDateValidation
    this.createTask = createTask
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { name, message, hourEvent, dateEvent } = httpRequest.body
      const { user } = httpRequest

      if (!name || name.trim() === '') return badRequest(new MissingParamError('name'))
      if (!dateEvent || dateEvent.trim() === '') {
        return badRequest(new MissingParamError('dateEvent'))
      }

      const dateIsValid = this.typeDateValidation.validate(dateEvent)

      if (dateIsValid) {
        return badRequest(dateIsValid)
      }

      if (user) {
        const task = {
          email: user.email,
          name: name,
          message: message,
          hourEvent: hourEvent || '',
          dateEvent: dateEvent,
          userId: user.id,
        }

        const newTask = await this.createTask.create(task)

        if (newTask) return created(newTask)
      }

      return badRequest(new UnauthorizedError())
    } catch (error) {
      return serverError()
    }
  }
}
