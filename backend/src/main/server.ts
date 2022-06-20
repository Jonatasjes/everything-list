import 'reflect-metadata'

import { AppPostgreDataSource } from '../infra/database/postrgre-typeorm/data-source'
import app from './config/app'

async function main(): Promise<void> {
  try {
    await AppPostgreDataSource.initialize()

    app.listen(3000)
    console.log('Server is listen on port 3000')
  } catch (error) {
    console.error(error)
  }
}

main()
