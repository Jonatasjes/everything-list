import env from '../config/env'
import { DataSource } from 'typeorm'
import { User } from './models/User'
import { Task } from './models/Task'

export const AppPostgreDataSource = new DataSource({
  type: 'postgres',
  host: env.host,
  port: env.port,
  username: env.username,
  password: env.password,
  database: env.database,
  synchronize: true,
  logging: true,
  entities: [User, Task],
  subscribers: [],
  migrations: [],
})

AppPostgreDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!')
  })
  .catch(err => {
    console.error('Error during Data Source initialization', err)
  })
