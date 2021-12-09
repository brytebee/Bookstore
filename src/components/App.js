import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
/* eslint-disable */
import Books from './books/Books.js';
import Categories from './categories/Categories.js';
/* eslint-enable */
import './App.css';

const App = () => (
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
);
export default App;
