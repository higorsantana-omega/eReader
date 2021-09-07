import { Request, Response, Router } from "express";
import { Book } from "./entities/Book";
import { IBook } from "./repositories/IBook";
import { CreateBookService } from "./services/createBook/CreateBookService";
import { ListAllBooksSerivce } from "./services/listAllBooks/ListAllBooksService";
import { UpdateBookService } from "./services/updateBook/UpdateBookService";

const router = Router();

const listBooksAllBooksService = new ListAllBooksSerivce();
const createBookService = new CreateBookService();
const updateBookService = new UpdateBookService();

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
  if (!idbook) {
    return res.status(400).json("Informe o id");
  }
  const deleteBook = await Book.destroy({ where: { id: idbook } });
  if (!deleteBook) {
    return res.status(400).json("Não encontrado");
  }
  return res.status(200).json(deleteBook);
});

export { router };
