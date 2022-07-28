import { ILoadAllTasks } from '@domain/usecases/task/ILoadAllTasks'
import { UnauthorizedError } from '@presentation/errors/unauthorized-error'
import { badRequest, ok, serverError } from '@presentation/helpers/http-helpers'
import { Controller } from '@presentation/protocols/controller'
import { HttpRequest, HttpResponse } from '@presentation/protocols/http'

export class LoadAllTasksController implements Controller {
  private readonly loadAllTask: ILoadAllTasks

  constructor(loadAllTask: ILoadAllTasks) {
    this.loadAllTask = loadAllTask
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { user } = httpRequest

      if (user) {
        const tasks = await this.loadAllTask.load(user.id)

        if (tasks) {
          return ok(tasks)
        }
      }

      return badRequest(new UnauthorizedError())
    } catch (error) {
      return serverError()
    }
  }
}
