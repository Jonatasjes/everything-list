import express from 'express'
import signupRouter from '../routes/signup-routes'
import setupMiddlewares from './middlewares'
const app = express()

setupMiddlewares(app)

app.use(signupRouter)

export default app
