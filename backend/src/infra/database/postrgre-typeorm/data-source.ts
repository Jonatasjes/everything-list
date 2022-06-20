import env from '../../../main/config/env'
import { DataSource } from 'typeorm'
import { Account } from './entities/Account'

export const AppPostgreDataSource = new DataSource({
  type: 'postgres',
  host: env.host,
  port: env.port,
  username: env.username,
  password: env.password,
  database: env.database,
  synchronize: true,
  logging: true,
  entities: [Account],
  subscribers: [],
  migrations: [],
})
