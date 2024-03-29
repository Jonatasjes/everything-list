import express from 'express'
import { makeSignupController } from '@main/factories/User/signup'
import { adaptRoute } from '@main/adapters/express-route-adapter'

const signupRouter = express.Router()

signupRouter.post('/signup', adaptRoute(makeSignupController()))

export default signupRouter
