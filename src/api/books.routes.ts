import { Request, Response, Router } from "express";
import { Book } from "./entities/Book";

const router = Router()

router.get("/", async (req: Request, res: Response): Promise<Response> => {
  const booksList = await Book.findAll()
  
  return res.json(booksList)
})

export { router }