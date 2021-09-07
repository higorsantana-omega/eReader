import { Book } from "../../entities/Book";
import { IBook } from "../../repositories/IBook";
import { create } from "domain";

class CreateBookService {
  async execute({
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
  }: IBook) {
    // const findById = await Book.findByPk(id);
    // if (!findById) {
    //   // create custom error
    //   return;
    // }

    const createBook = await Book.create({
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

    return createBook;
  }
}

export { CreateBookService };
