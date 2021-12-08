import './Form.css';

export default function Form() {
  return (
    <form>
      <h3>Add a book</h3>
      <input type="text" id="bookTitle" placeholder="Book title" />
      <select>
        <option selected value="Category">
          Category
        </option>
        <option value="Music">Music</option>
        <option value="Programming">Programming</option>
        <option value="Fiction">Fiction</option>
        <option value="Science fiction">Science fiction</option>
      </select>
      <button type="button">ADD BOOK</button>
    </form>
  );
}
