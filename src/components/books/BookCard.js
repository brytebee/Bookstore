import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  chapter,
  randomCompletion,
  removeBookFromStore,
} from '../../redux/books/books';
import './BookCard.css';

export default function BookCard({ book }) {
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(removeBookFromStore(id));
  };
  return (
    <div className="container">
      <div id="book-info">
        <h3>{book.category}</h3>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <div>
          <button className="info-btn" type="button">
            Comment
          </button>

          <button
            className="info-btn"
            type="button"
            onClick={() => deleteHandler(book.item_id)}
          >
            Remove
          </button>

          <button className="info-btn" type="button">
            Edit
          </button>
        </div>
      </div>
      <div id="progress-bar">
        {/* <img alt="progress bar" src={book.progress} /> */}
        {randomCompletion()}
        % Completed
      </div>
      <div id="progress-info">
        <h3>Current Chapter</h3>
        <p>
          Chapter:
          {chapter()}
        </p>
        <button type="button">Update progress</button>
      </div>
    </div>
  );
}

BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
    chapter: PropTypes.number,
    progress: PropTypes.number,
    item_id: PropTypes.string,
  }).isRequired,
};
