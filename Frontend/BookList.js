import React, { useEffect, useState } from "react";
import axios from "axios";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({ title: "", author: "", isbn: "" });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const res = await axios.get("http://localhost:8080/api/books");
    setBooks(res.data);
  };

  const addBook = async () => {
    await axios.post("http://localhost:8080/api/books", form);
    setForm({ title: "", author: "", isbn: "" });
    fetchBooks();
  };

  const deleteBook = async (id) => {
    await axios.delete(`/api/books/${id}`);
    fetchBooks();
  };

  return (
    <div>
      <h4>Books</h4>
      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        placeholder="Author"
        value={form.author}
        onChange={(e) => setForm({ ...form, author: e.target.value })}
      />
      <input
        placeholder="ISBN"
        value={form.isbn}
        onChange={(e) => setForm({ ...form, isbn: e.target.value })}
      />
      <button onClick={addBook} className="btn btn-primary btn-sm ms-2">
        Add Book
      </button>

      <ul className="mt-3">
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - {book.author} - {book.status}
            <button
              className="btn btn-danger btn-sm ms-2"
              onClick={() => deleteBook(book.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
