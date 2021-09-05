import { Sequelize } from "sequelize";

const connection = new Sequelize({
  dialect: 'sqlite',
  storage: './src/api/database/db.sqlite'
})

export { connection }
