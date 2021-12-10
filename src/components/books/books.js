import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../redux/books/books';
import BookCard from './BookCard';
import Form from './Form';

const Books = () => {
  const dispatch = useDispatch();
  const allBooks = useSelector((state) => state.booksReducer);
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <div>
      {allBooks.map((book) => (
        <BookCard book={book} key={book.id} />
      ))}
      <Form />
    </div>
  );
};

export default Books;
