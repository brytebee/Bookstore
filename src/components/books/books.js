import { useSelector } from 'react-redux';
import BookCard from './BookCard';
import Form from './Form';

const Books = () => {
  const allBooks = useSelector((state) => state.booksReducer);
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
