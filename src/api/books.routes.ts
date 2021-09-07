import { Request, Response, Router } from "express";
import { listenerCount } from "stream";
import { app } from "./app";
import { Book } from "./entities/Book";
import { IBook } from "./repositories/IBook";

const router = Router();

router.get("/", async (req: Request, res: Response): Promise<Response> => {
  const booksList = await Book.findAll();

  return res.json(booksList);
});

router.post("/book", async (req: Request, res: Response): Promise<Response> => {
  const {
    id,
    book_name,
    author,
    categories,
    book_rating,
    publisher,
    year,
    pages,
    volume,
    edition,
    language,
    file,
  }: IBook = req.body;

  let findEqualsID = await Book.findByPk(id)

  if (findEqualsID) {
    return res.status(400).send("Este livro já existe")
  }

  let createBook = await Book.create({
    id,
    book_name,
    author,
    categories,
    book_rating,
    publisher,
    year,
    pages,
    volume,
    edition,
    language,
    file,
  })

  return res.json(createBook)
});

export { router };
