import express from 'express'
import { HttpRequest } from '../../presentation/protocols/http'
import { makeSignupController } from '../factories/signup'

const signupRouter = express.Router()

signupRouter.post('/signup', async (req, res) => {
  const signUpController = makeSignupController()

  const httpRequest: HttpRequest = {
    body: req.body,
  }

  const httpResponse = await signUpController.handle(httpRequest)

  res.status(httpResponse.statusCode).json(httpResponse.body)
})

export default signupRouter
