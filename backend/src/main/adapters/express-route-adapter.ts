import { Request, Response } from 'express'
import { Controller } from '@presentation/protocols/controller'
import { HttpRequest } from '@presentation/protocols/http'

export const adaptRoute = (constroller: Controller) => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
    }

    if (req.user) {
      httpRequest.user = req.user
    }

    if (req.params) {
      httpRequest.params = req.params
    }

    if (req.query) {
      httpRequest.query = req.query
    }
    const httpResponse = await constroller.handle(httpRequest)
    Object.assign(req, httpResponse.body)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
