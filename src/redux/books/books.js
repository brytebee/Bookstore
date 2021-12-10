const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOK = 'bookStore/books/GET_BOOK';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/0MxoaYAlLWZ6BQnrAqvb/books/';
export const randomCompletion = () => Math.floor(Math.random() * 100);
export const chapter = () => Math.floor(Math.random() * 20) + 1;

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload: {
    ...payload,
    progress: randomCompletion(),
    chapter: chapter(),
  },
});

export const removeBook = (items) => ({
  type: REMOVE_BOOK,
  payload: items,
});

export const getBook = (allBooks) => ({
  type: GET_BOOK,
  payload: allBooks,
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
  console.log(bookData);
  dispatch(getBook(bookData));
};

export const removeBookFromStore = (id) => async (dispatch) => {
  await fetch(`${baseUrl}${id}`, {
    method: 'DELETE',
    body: JSON.stringify({}),
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
        };
      });
    default:
      return state;
  }
};

export default bookReducer;
