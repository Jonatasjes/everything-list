import 'reflect-metadata'
import express from 'express'
import { AppPostgreDataSource } from '../infra/database/postrgre-typeorm/data-source'

async function main(): Promise<void> {
  try {
    await AppPostgreDataSource.initialize()
    const app = express()
    app.listen(3000)
    console.log('Server is listen on port 3000')
  } catch (error) {
    console.error(error)
  }
}

main()
