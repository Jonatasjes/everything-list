import 'dotenv/config'
import express from 'express'
import loginRouter from '@main/routes/user/login-routes'
import signupRouter from '@main/routes/user/signup-routes'
import taskRouter from '@main/routes/task/task-routes'
import setupMiddlewares from './middlewares'
const app = express()

setupMiddlewares(app)

app.use('/api/v0', signupRouter)
app.use('/api/v0', loginRouter)
app.use('/api/v0', taskRouter)

export default app
