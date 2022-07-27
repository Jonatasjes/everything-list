import { adaptMiddleware } from '@main/adapters/express-middleware-adapter'
import { makeAuthMiddlewareController } from '@main/factories/middlewares/authentication/auth-middleware'

export const auth = adaptMiddleware(makeAuthMiddlewareController())
