import express from "express";

const app = express();
app.use(express.json());

const port = 2001;

/* 
ID
BOOK NAME
AUTHOR
CATEGORIES
BOOK RATING
PUBLISHER
YEAR
PAGES
VOLUME
EDITION
LANGUAGE
FILE
*/
let books = [
  {
    id: "1",
    book_name: "The Book Thief",
    author: "Markus Zusak",
    categories: "Fiction",
    book_rating: 5,
    publisher: "Alfred A. Knopf",
    year: 2007,
    pages: 584,
    volume: 5,
    edition: 3,
    language: "english",
    file: "C:/any_file",
  },
];

app.get("/", (req, res) => {
  res.json(books);
});

app.post("/", (req, res) => {
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

  if (!book_name) {
    res.sendStatus(400).json("Está faltando o nome do livro");
  }

  books.push({
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

  res.json(books[id]);
});

app.put("/:bookId", (req, res) => {
  const { bookId } = req.params

  if (!bookId) {
    res.json("Nenhum id encontrado");
  }

  const bookid = books.findIndex(book => book.id === bookId)

  // if (!bookid) {
  //   return res.sendStatus(404).json({
  //     message: 'ID do livro não encontrado na base de dados',
  //   })
  // }

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

  const updateBook = {
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
  }
  console.log(updateBook)

  books.splice(bookid, 1, updateBook)

  res.sendStatus(201).json(updateBook);
  
})

app.delete('/:idBook', (req, res) => {
  const { idBook } = req.params

  const id = books.findIndex(book => book.id === idBook)

  books.splice(id, 1)

  res.sendStatus(200).json(books)
})

app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`));
