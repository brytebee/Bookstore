import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { chapter, removeBookFromStore } from '../../redux/books/books';
import '../App.css';
import Bookprogress from './progress';

export default function BookCard({ book }) {
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(removeBookFromStore(id));
  };
  return (
    <div className="container page-main-margin">
      <div id="book-info">
        <h4 className="my-grey">{book.category}</h4>
        <h2 className="montseratt">{book.title}</h2>
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
        <Bookprogress progress={book.progress} />
      </div>
      <div id="progress-info">
        <p>Current Chapter</p>
        <h3 className="chapter">
          Chapter:
          {chapter()}
        </h3>
        <button className="update-btn" type="button">
          Update progress
        </button>
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
