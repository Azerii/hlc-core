const dotEnv = require('dotenv');
const path = require('path');

const pathConfig = {path: process.env.NODE_ENV ? path.join(__dirname, `./.env.${process.env.NODE_ENV}`) : undefined};

dotEnv.config({
  ...pathConfig
});

module.exports = {
  debug: process.env.DB_DEBUG_MODE === 'true',
  client: process.env.DB_DIALECT,
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: "./migrations/knex",
    tableName: "knex_migrations"
  }
};
