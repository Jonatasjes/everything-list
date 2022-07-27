import { adaptRoute } from '@main/adapters/express-route-adapter'
import { makeCreateTaskController } from '@main/factories/task/create-task'
import { auth } from '@main/middlewares/auth'
import express from 'express'

const taskRouter = express.Router()
taskRouter.post('/task', auth, adaptRoute(makeCreateTaskController()))

export default taskRouter
