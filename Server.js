const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json()); // middleware to parse JSON

// In-memory book storage
let books = [
  { id: 1, title: "Book One", author: "Author One" },
  { id: 2, title: "Book Two", author: "Author Two" },
];

// GET /books
app.get("/books", (req, res) => {
  res.json(books);
});

// POST /books
app.post("/books", (req, res) => {
  const { title, author } = req.body;
  const newBook = { id: books.length + 1, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT /books/:id
app.put("/books/:id", (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return res.status(404).json({ message: "Book not found" });

  book.title = title || book.title;
  book.author = author || book.author;

  res.json(book);
});

// DELETE /books/:id
app.delete("/books/:id", (req, res) => {
  const { id } = req.params;
  books = books.filter((b) => b.id !== parseInt(id));
  res.json({ message: "Book deleted successfully" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
