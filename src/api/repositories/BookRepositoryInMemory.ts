import { Book } from "../entities/Book"

class BookRepositoryInMemory {
  books: Book[] = []
}

export { BookRepositoryInMemory }
