import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchMovies from "./searchMovies";

export default function Main() {
  return (
    <div className="container">
      <h1 className="title">React Movies Search</h1>
      <SearchMovies />
    </div>
  )
}

ReactDOM.render(<Main />, document.getElementById('root')
);

