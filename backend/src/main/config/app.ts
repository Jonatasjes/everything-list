import 'dotenv/config'
import express from 'express'
import loginRouter from '@main/routes/user/login-routes'
import signupRouter from '@main/routes/user/signup-routes'
import taskRouter from '@main/routes/task/task-routes'
import setupMiddlewares from './middlewares'
const app = express()

setupMiddlewares(app)

app.use(signupRouter)
app.use(loginRouter)
app.use(taskRouter)

export default app
