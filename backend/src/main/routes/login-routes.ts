import { adaptRoute } from '@main/adapters/express-route-adapter'
import { makeLoginController } from '@main/factories/login'
import express from 'express'

const loginRouter = express.Router()

loginRouter.post('/login', adaptRoute(makeLoginController()))

export default loginRouter
