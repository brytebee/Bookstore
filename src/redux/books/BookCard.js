import './BookCard.css';

export default function BookCard() {
  const books = [
    {
      author: 'Robert Kiyosaki',
      title: 'Rich Dad, Poor Dad',
      category: 'Finance',
    },
    {
      author: 'George S. Clason',
      title: 'The Richest Man in Babylon',
      category: 'Finance',
    },
    {
      author: 'Robert Kiyosaki',
      title: 'Think and Grow Rich',
      category: 'Personal Development',
    },
  ];

  const { category, title, author } = books[0];

  return (
    <div className="container">
      <div id="book-info">
        <h3>{category}</h3>
        <h2>{title}</h2>
        <p>{author}</p>
        <div>
          <button className="info-btn" type="button">
            Comment
          </button>

          <button className="info-btn" type="button">
            Remove
          </button>

          <button className="info-btn" type="button">
            Edit
          </button>
        </div>
      </div>
      <div id="progress-bar">
        <img alt="progress bar" />
      </div>
      <div id="progress-info">
        <h3>Current Chapter</h3>
        <h3>Introduction</h3>
        <button type="button">Update progress</button>
      </div>
    </div>
  );
}
