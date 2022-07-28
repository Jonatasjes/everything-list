import { adaptRoute } from '@main/adapters/express-route-adapter'
import { makeCreateTaskController } from '@main/factories/task/create-task'
import { makeLoadAllTasksController } from '@main/factories/task/load-all-tasks'
import { auth } from '@main/middlewares/auth'
import express from 'express'

const taskRouter = express.Router()
taskRouter.get('/tasks', auth, adaptRoute(makeLoadAllTasksController()))
taskRouter.post('/tasks', auth, adaptRoute(makeCreateTaskController()))

export default taskRouter
