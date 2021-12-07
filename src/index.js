import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Books from './redux/books/books';
import Categories from './redux/categories/categories';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <nav>
        <div id="logo">Bookstore</div>
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
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/" element={<Books />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
