import { AuthToken, Middleware } from '@presentation/protocols/middleware'
import { Request, Response, NextFunction } from 'express'

export const adaptMiddleware = (middleware: Middleware) => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  return async (req: Request, res: Response, next: NextFunction) => {
    const httpRequest: AuthToken = {
      headers: {
        authorization: req.headers.authorization
          ? req.headers.authorization.replace('Bearer', '').trim()
          : req.headers.authorization,
      },
    }

    const httpResponse = await middleware.handle(httpRequest)
    if (httpResponse.statusCode === 200) {
      Object.assign(req, httpResponse.body)
      next()
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message,
      })
    }
  }
}
