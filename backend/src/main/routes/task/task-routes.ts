import { adaptRoute } from '@main/adapters/express-route-adapter'
import { makeCreateTaskController } from '@main/factories/task/create-task'
import { makeLoadAllTasksController } from '@main/factories/task/load-all-tasks'
import { makeUpdateTaskController } from '@main/factories/task/update-task'
import { auth } from '@main/middlewares/auth'
import express from 'express'

const taskRouter = express.Router()
taskRouter.get('/api/v0/tasks', auth, adaptRoute(makeLoadAllTasksController()))
taskRouter.post('/api/v0/tasks', auth, adaptRoute(makeCreateTaskController()))
taskRouter.patch('/api/v0/tasks/:id', auth, adaptRoute(makeUpdateTaskController()))

export default taskRouter
