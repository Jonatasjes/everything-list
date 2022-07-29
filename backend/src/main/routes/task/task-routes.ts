import { adaptRoute } from '@main/adapters/express-route-adapter'
import { makeCreateTaskController } from '@main/factories/task/create-task'
import { makeDeleteTaskController } from '@main/factories/task/delete-task'
import { makeFindTaskByIdController } from '@main/factories/task/find-task-by-id'
import { makeLoadAllTasksController } from '@main/factories/task/load-all-tasks'
import { makeUpdateTaskController } from '@main/factories/task/update-task'
import { auth } from '@main/middlewares/auth'
import express from 'express'

const taskRouter = express.Router()
taskRouter.get('/tasks', auth, adaptRoute(makeLoadAllTasksController()))
taskRouter.get('/tasks/:id', auth, adaptRoute(makeFindTaskByIdController()))
taskRouter.post('/tasks', auth, adaptRoute(makeCreateTaskController()))
taskRouter.patch('/tasks/:id', auth, adaptRoute(makeUpdateTaskController()))
taskRouter.delete('/tasks/:id', auth, adaptRoute(makeDeleteTaskController()))

export default taskRouter
