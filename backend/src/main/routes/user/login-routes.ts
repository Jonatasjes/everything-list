import { adaptRoute } from '@main/adapters/express-route-adapter'
import { makeLoginController } from '@main/factories/user/login'
import express from 'express'

const loginRouter = express.Router()

loginRouter.post('/api/v0/login', adaptRoute(makeLoginController()))

export default loginRouter
