import { Book } from "../../entities/Book";

class ListAllBooksSerivce {
  async execute() {
    const booksList = await Book.findAll();
    return booksList;
  }
}

export { ListAllBooksSerivce };
