import React, { useState } from "react";
import axios from "axios";

const ReturnBook = () => {
  const [form, setForm] = useState({ id: "", bookId: "" });

  const returnB = async () => {
    await axios.post("http://localhost:8080/api/return", form);
    setForm({ id: "", bookId: "" });
    alert("Book Returned!");
  };

  return (
    <div>
      <h4>Return Book</h4>
      <input
        placeholder="Transaction ID"
        value={form.id}
        onChange={(e) => setForm({ ...form, id: e.target.value })}
      />
      <input
        placeholder="Book ID"
        value={form.bookId}
        onChange={(e) => setForm({ ...form, bookId: e.target.value })}
      />
      <button onClick={returnB} className="btn btn-warning btn-sm ms-2">
        Return
      </button>
    </div>
  );
};

export default ReturnBook;
