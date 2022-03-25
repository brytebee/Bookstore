import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addNewBook } from '../../redux/books/books';
import '../App.css';

export default function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const tileHandler = (event) => {
    setTitle(event.target.value);
  };
  const categoryHandler = (event) => {
    if (!event.target.defaultValue) {
      setCategory(event.target.value);
    }
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addNewBook(newBook));
    setTitle('');
    setAuthor('');
    setCategory('Choose category');
  };

  return (
    <div className="form-top page-main-margin">
      <h2 className="montseratt form-title my-grey">Add a book</h2>
      <form onSubmit={submitBookToStore}>
        <input
          type="text"
          className="title form-input"
          placeholder="Book title"
          onChange={tileHandler}
          value={title}
          required
        />
        <div className="opt-btn">
          <select
            name="category"
            value={category}
            onChange={categoryHandler}
            className="form-input"
            required
          >
            <option defaultValue="Choose category">Choose category</option>
            <option value="Movies">Movies</option>
            <option value="Music">Music</option>
            <option value="Programming">Programming</option>
            <option value="Fiction">Fiction</option>
            <option value="Science fiction">Science fiction</option>
            <option value="Finance">Finance</option>
            <option value="Personal Development">Personal Development</option>
          </select>
          <input className="submit" type="submit" value="Add book" />
        </div>
      </form>
    </div>
  );
}
