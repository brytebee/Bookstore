const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOK = 'bookStore/books/GET_BOOK';
const baseUrl =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/0MxoaYAlLWZ6BQnrAqvb/books/';

const initialState = [];

const addBook = (payload) => ({
  type: ADD_BOOK,
  payload: {
    ...payload,
    progress: randomCompletion(),
    chapter: chapter(),
    author: 'Bright',
  },
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const getBook = (payload) => ({
  type: GET_BOOK,
  payload,
});

export const addNewBook = (newBook) => async (dispatch) => {
  await fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify(newBook),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  dispatch(addBook(newBook));
};

export const getBooks = () => async (dispatch) => {
  const books = await fetch(baseUrl);
  const bookData = await books.json();
  dispatch(getBook(bookData));
};

export const removeBookFromStore = (id) => async (dispatch) => {
  await fetch(`${baseUrl}${itemId}`, {
    method: 'DELETE',
    body: JSON.stringify({ item_id: id }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  dispatch(removeBook(id));
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    case GET_BOOK:
      return Object.entries(action.payload).map(([key, value]) => {
        const [book] = value;
        return {
          item_id: key,
          ...book,
          progress: randomCompletion(),
          chapter: chapter(),
          author: 'Bright',
        };
      });
    default:
      return state;
  }
};

export default bookReducer;
