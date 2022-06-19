import { DataSource } from 'typeorm'
import { Account } from './entities/Account'

export const AppPostgreDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'everything_list',
  synchronize: true,
  logging: true,
  entities: [Account],
  subscribers: [],
  migrations: [],
})
