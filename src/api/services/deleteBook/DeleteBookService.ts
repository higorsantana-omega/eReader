import { Book } from "../../entities/Book";

class DeleteBookService {
  async execute({ idbook }) {
    // if (!idbook) {
    //   return res.status(400).json("Informe o id");
    //   Tratativa de erro
    // }

    const deleteBook = await Book.destroy({ where: { id: idbook } });
    // if (!deleteBook) {
    //    Tratativa de erro
    //   return res.status(400).json("Não encontrado");
    // }
    return deleteBook;
  }
}

export { DeleteBookService };
