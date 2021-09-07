import { Request, Response, Router } from "express";
import { IBook } from "./repositories/IBook";

import { CreateBookService } from "./services/createBook/CreateBookService";
import { DeleteBookService } from "./services/deleteBook/DeleteBookService";
import { ListAllBooksSerivce } from "./services/listAllBooks/ListAllBooksService";
import { UpdateBookService } from "./services/updateBook/UpdateBookService";

const router = Router();

const listBooksAllBooksService = new ListAllBooksSerivce();
const createBookService = new CreateBookService();
const updateBookService = new UpdateBookService();
const deleteBookService = new DeleteBookService();

router.get("/", async (req: Request, res: Response): Promise<Response> => {
  const listAllBooks = await listBooksAllBooksService.execute();
  return res.json(listAllBooks);
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

  const createBook = await createBookService.execute({
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
  });

  return res.sendStatus(201).json(createBook);
});

router.put("/book/:idbook", async (req: Request, res: Response) => {
  const { idbook } = req.params;
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
  } = req.body;

  const updateBook = await updateBookService.execute({
    idbook,
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
  });

  return res.json(updateBook);
});

router.delete("/book/:idbook", async (req: Request, res: Response) => {
  const { idbook } = req.params;

  const deleteBook = await deleteBookService.execute({ idbook });

  return res.json(deleteBook);
});

export { router };
