import { Book } from "../entities/Book";
import { Sequelize } from "sequelize";
import { connection } from "./connection";

export default (async () => {
  const db = connection
  const db_table = Book
  try {
    await db.sync()
    console.log('oi')
  } catch (err) {
    console.log(err)
  }
})

