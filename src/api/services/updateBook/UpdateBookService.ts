import { Book } from "../../entities/Book";

class UpdateBookService {
  async execute({
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
  }) {
    const findBookById = await Book.findByPk(idbook);

    // if (!findBookById) {
    //    Tratativa de erro
    //   return res.status(400).json("Este livro não existe");
    // }

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

    return updateBook;
  }
}

export { UpdateBookService };
