import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';
import './Form.css';

export default function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const authorHandler = (event) => {
    setAuthor(event.target.value);
  };
  const tileHandler = (event) => {
    setTitle(event.target.value);
  };
  const categoryHandler = (event) => {
    if (event.target.value !== 'Choose category') {
      setCategory(event.target.value);
    }
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={submitBookToStore}>
      <h2>Add a book</h2>
      <input
        type="text"
        className="title"
        placeholder="Book title"
        onChange={tileHandler}
        value={title}
        required
      />
      <input
        type="text"
        className="author"
        placeholder="Book author"
        onChange={authorHandler}
        value={author}
        required
      />
      <select
        name="category"
        value={category}
        onChange={categoryHandler}
        required
      >
        <option value="Choose category">Choose category</option>
        <option value="Movies">Movies</option>
        <option value="Music">Music</option>
        <option value="Programming">Programming</option>
        <option value="Fiction">Fiction</option>
        <option value="Science fiction">Science fiction</option>
        <option value="Finance">Finance</option>
        <option value="Personal Development">Personal Development</option>
      </select>
      <input className="submit" type="submit" value="Add book" />
    </form>
  );
}
