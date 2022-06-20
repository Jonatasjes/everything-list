import express from 'express'
import { makeSignupController } from '../factories/signup'
import { adaptRoute } from '../adapters/express-route-adapter'

const signupRouter = express.Router()

signupRouter.post('/signup', adaptRoute(makeSignupController()))

export default signupRouter
