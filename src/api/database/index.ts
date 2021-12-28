import { connection } from "./connection";
import { logger } from "../helpers/log"; 

export default (async () => {
  const db = connection
  try {
    await db.sync()
    logger.info('DB is now connected')
  } catch (err) {
    logger.fatal('DB: ', err)
  }
})

