export default {
  host: process.env.DBHOST || 'localhost',
  port: parseInt(process.env.DBPORT) || 5432,
  username: process.env.DBUSERNAME || 'postgres',
  password: process.env.DBPASSWORD || 'postgres',
  database: process.env.DBDATABASE || 'everything_list',
}
