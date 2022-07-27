import { adaptRoute } from '@main/adapters/express-route-adapter'
import { makeCreateTaskController } from '@main/factories/task/create-task'
import express from 'express'

const taskRouter = express.Router()

taskRouter.post('/task', adaptRoute(makeCreateTaskController()))

export default taskRouter
