import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Books from './components/books/Books';
import Categories from './components/categories/Categories';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <nav>
        <h1 id="logo">Bookstore CMS</h1>
        <ul>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/categories" element={<Categories />} />
        <Route path="/" element={<Books />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
