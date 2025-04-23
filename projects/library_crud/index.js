import express from "express";

const app = express();
const port = 3000;
app.use(express.json());

let books = [];
let nextId = 1;

// add a new book
// when saving the data in the database, use app.post
app.post("/books", (req, res) => {
  // req.body.price
  const { name, price } = req.body;
  const newBook = { id: nextId++, name, price };
  books.push(newBook);
  res.status(201).send(newBook);
});

// get all book
app.get("/books", (req, res) => {
  res.status(200).send(books);
});

// get a book w/ id
app.get("/books/:id", (req, res) => {
  const book = books.find((t) => t.id === parseInt(req.params.id));
  if (!book) return res.status(404).send("Book not found");
  res.status(200).send(book);
});

// update book
app.put("/books/:id", (req, res) => {
  // const bookID = req.params.id;
  const book = books.find((t) => t.id === parseInt(req.params.id));
  if (!book) return res.status(404).send("Book not found");
  const { name, price } = req.body;
  book.name = name;
  book.price = price;
  // res.send(200).send(book);  -> .send(book) doesnt get executed as intended as res is already being sent
  res.status(200).send(book);
});

// delete a book
app.delete("/books/:id", (req, res) => {
  const index = books.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send("Book not found");
  books.splice(index, 1);
  return res.status(200).send("deleted");
});

app.listen(port, () => {
  console.log(`Server is running at port: ${port} ...`);
});
