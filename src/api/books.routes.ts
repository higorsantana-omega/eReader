import { Request, Response, Router } from "express";
import { Book } from "./entities/Book";
import { IBook } from "./repositories/IBook";
import { ListAllBooksSerivce } from "./services/listAllBooks/ListAllBooksService";

const router = Router();

const listBooksAllBooksService = new ListAllBooksSerivce

router.get("/", async (res: Response): Promise<Response> => {
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

  let findEqualsID = await Book.findByPk(id);

  if (findEqualsID) {
    return res.status(400).send("Este livro já existe");
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
  });

  return res.json(createBook);
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

  if (!idbook) {
    return res.status(400).json("Informe o id");
  }

  const findBookById = await Book.findByPk(idbook);

  if (!findBookById) {
    return res.status(400).json("Este livro não existe");
  }

  const updateBook = await findBookById.update({
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

  return res.status(200).json(updateBook)
});

router.delete("/book/:idbook", async (req: Request, res: Response) => {
  const { idbook } = req.params;
  if (!idbook) {
    return res.status(400).json("Informe o id");
  }
  const deleteBook = await Book.destroy({ where: { id: idbook } })
  if (!deleteBook) {
    return res.status(400).json("Não encontrado")
  }
  return res.status(200).json(deleteBook)
})

export { router };
