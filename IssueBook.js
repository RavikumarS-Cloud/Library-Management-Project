import React, { useState } from "react";
import axios from "axios";

const IssueBook = () => {
  const [form, setForm] = useState({ bookId: "", user: "" });

  const issue = async () => {
    await axios.post("http://localhost:8080/api/issue", form);
    setForm({ bookId: "", user: "" });
    alert("Book Issued!");
  };

  return (
    <div>
      <h4>Issue Book</h4>
      <input
        placeholder="Book ID"
        value={form.bookId}
        onChange={(e) => setForm({ ...form, bookId: e.target.value })}
      />
      <input
        placeholder="User"
        value={form.user}
        onChange={(e) => setForm({ ...form, user: e.target.value })}
      />
      <button onClick={issue} className="btn btn-success btn-sm ms-2">
        Issue
      </button>
    </div>
  );
};

export default IssueBook;
