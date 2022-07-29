import { IFindTaskById } from '@domain/usecases/task/IFindTaskById'
import { TaskNotFoundError } from '@presentation/errors/task-not-found-error'
import { badRequest, ok, serverError } from '@presentation/helpers/http-helpers'
import { Controller } from '@presentation/protocols/controller'
import { HttpRequest, HttpResponse } from '@presentation/protocols/http'

export class FindTaskByIdController implements Controller {
  private readonly findTaskById: IFindTaskById

  constructor(findTaskById: IFindTaskById) {
    this.findTaskById = findTaskById
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params

      const task = await this.findTaskById.findById(id)

      if (task) {
        return ok(task)
      }

      return badRequest(new TaskNotFoundError())
    } catch (error) {
      return serverError()
    }
  }
}
