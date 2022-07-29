import { Status } from '@domain/models/task/ITask'
import { ILoadAllTasks, ILoadAllTasksModel } from '@domain/usecases/task/ILoadAllTasks'
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
      const page = httpRequest.query.page || 1
      const limit = httpRequest.query.limit || 10
      const status = httpRequest.query.status

      const skip = parseInt(page) == 1 ? 0 : (parseInt(page) - 1) * parseInt(limit)

      const loadAllTaskModel: ILoadAllTasksModel = {
        userId: user.id,
        page: skip,
        limit: parseInt(limit),
      }

      if (status && Status[status] != undefined) {
        loadAllTaskModel.status = status
      }

      if (user) {
        const tasks = await this.loadAllTask.load(loadAllTaskModel)

        if (tasks) return ok(tasks)
      }

      return badRequest(new UnauthorizedError())
    } catch (error) {
      return serverError()
    }
  }
}
