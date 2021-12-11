import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import './App.css';
import Books from './books/books';
import Categories from './categories/categories';

const App = () => (
  <Router>
    <nav className="navbar page-main-margin">
      <div className="nav-items">
        <h1 className="bookstore-CMS" id="logo">
          Bookstore CMS
        </h1>
        <ul>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </div>
      <div className="oval">
        <i className="fas fa-user-circle fa-2x" />
      </div>
    </nav>

    <Routes>
      <Route path="/categories" element={<Categories />} />
      <Route path="/" element={<Books />} />
    </Routes>
  </Router>
);
export default App;
