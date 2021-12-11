import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import './App.css';
import Books from './books/books';
import Categories from './categories/categories';

const App = () => (
  <div className="panel-bg">
    <Router>
      <nav>
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
      </nav>

      <Routes>
        <Route path="/categories" element={<Categories />} />
        <Route path="/" element={<Books />} />
      </Routes>
    </Router>
  </div>
);
export default App;
