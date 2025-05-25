import React, { useEffect, useState } from "react";
import axios from "axios";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/transactions")
      .then((res) => setTransactions(res.data));
  }, []);

  return (
    <div>
      <h4>Transactions</h4>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Book ID</th>
            <th>User</th>
            <th>Issue Date</th>
            <th>Due Date</th>
            <th>Return Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id}>
              <td>{tx.id}</td>
              <td>{tx.bookId}</td>
              <td>{tx.user}</td>
              <td>{tx.issueDate}</td>
              <td>{tx.dueDate}</td>
              <td>{tx.returnDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
