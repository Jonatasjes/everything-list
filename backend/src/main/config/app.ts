import loginRouter from '@main/routes/login-routes'
import 'dotenv/config'
import express from 'express'
import signupRouter from '../routes/signup-routes'
import setupMiddlewares from './middlewares'
const app = express()

setupMiddlewares(app)

app.use(signupRouter)
app.use(loginRouter)

export default app
