import { Status } from '@domain/models/task/ITask'
import { IFindTaskById } from '@domain/usecases/task/IFindTaskById'
import { IUpdateInputs, IUpdateTask } from '@domain/usecases/task/IUpdateTask'
import { TaskNotFoundError } from '@presentation/errors/task-not-found-error'
import { TaskStatusError } from '@presentation/errors/task-status-error'
import { badRequest, ok, serverError } from '@presentation/helpers/http-helpers'
import { Controller } from '@presentation/protocols/controller'
import { HttpRequest, HttpResponse } from '@presentation/protocols/http'

export class UpdateTaskController implements Controller {
  private readonly updateTask: IUpdateTask
  private readonly findTaskById: IFindTaskById

  constructor(updateTask: IUpdateTask, findTaskById: IFindTaskById) {
    this.updateTask = updateTask
    this.findTaskById = findTaskById
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const userId = httpRequest.user.id
      const taskId = httpRequest.params.id
      const { message, status } = httpRequest.body

      if (message.trim() === '') {
        return badRequest(new Error('Please, a message shoud be provided.'))
      }

      if (Status[status] == undefined) return badRequest(new TaskStatusError())

      const task = await this.findTaskById.findById(taskId)

      if (task) {
        const updateInputs: IUpdateInputs = {
          userId,
          taskId,
          message,
          status,
        }

        const updatedTask = await this.updateTask.update(updateInputs)

        if (updatedTask) return ok(updatedTask)
      }

      return badRequest(new TaskNotFoundError())
    } catch (error) {
      return serverError()
    }
  }
}
