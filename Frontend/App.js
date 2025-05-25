
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookList from './BookList';
import IssueBook from './IssueBook';
import ReturnBook from './ReturnBook';
import Transactions from './Transactions';

const App = () => {
  return (
    <Router>
      <div className="container mt-4">
        <h2>📚 Library Management</h2>
        <nav className="mb-4">
          <Link to="/" className="btn btn-primary me-2">Books</Link>
          <Link to="/issue" className="btn btn-success me-2">Issue</Link>
          <Link to="/return" className="btn btn-warning me-2">Return</Link>
          <Link to="/transactions" className="btn btn-info">Transactions</Link>
        </nav>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/issue" element={<IssueBook />} />
          <Route path="/return" element={<ReturnBook />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
