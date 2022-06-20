import 'reflect-metadata'
import express from 'express'
import cors from 'cors'

import { AppPostgreDataSource } from '../infra/database/postrgre-typeorm/data-source'
import signupRouter from './routes/signup-routes'

async function main(): Promise<void> {
  try {
    await AppPostgreDataSource.initialize()
    const app = express()

    app.use(express.json())
    app.use(cors())

    app.use(signupRouter)

    app.listen(3000)
    console.log('Server is listen on port 3000')
  } catch (error) {
    console.error(error)
  }
}

main()
