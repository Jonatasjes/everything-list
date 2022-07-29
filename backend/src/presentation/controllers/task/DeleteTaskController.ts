import { IDeleteTask } from '@domain/usecases/task/IDeleteTask'
import { noContent, serverError } from '@presentation/helpers/http-helpers'
import { Controller } from '@presentation/protocols/controller'
import { HttpRequest, HttpResponse } from '@presentation/protocols/http'

export class DeleteTaskController implements Controller {
  private readonly deleteTask: IDeleteTask

  constructor(deleteTask: IDeleteTask) {
    this.deleteTask = deleteTask
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params

      await this.deleteTask.delete(id)

      return noContent()
    } catch (error) {
      return serverError()
    }
  }
}
