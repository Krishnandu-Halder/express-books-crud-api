# 📚 Books REST API (Node.js + Express)

A simple REST API to manage a list of books using **Node.js** and **Express**.  
Supports **CRUD operations** (Create, Read, Update, Delete) with in-memory storage.

---

## 🚀 Features
- **GET /books** → Fetch all books
- **POST /books** → Add a new book
- **PUT /books/:id** → Update book by ID
- **DELETE /books/:id** → Delete book by ID

---

## 🛠️ Setup
```bash
npm install
npm start
```

🧪 Testing

Use Postman or cURL to test endpoints.

Example:
  ```bash
POST /books
{
  "title": "New Book",
  "author": "New Author"
}
```
---
