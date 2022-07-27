import { Controller } from '@presentation/protocols/controller'
import { HttpRequest, HttpResponse } from '@presentation/protocols/http'

export class LoadAllTasksController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {}
}
