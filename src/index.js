import React from 'react';
import ReactDOM from 'react-dom';

const Welcome = () => <div>
  <h1>Welcome</h1>
  <p>Hello world!</p>
</div>
ReactDOM.render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>,
  document.getElementById('root')
);
