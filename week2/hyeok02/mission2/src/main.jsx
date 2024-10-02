import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { MOVIES } from './mocks/movie.js';
import Movie from './page/movie.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="app-container">
      {MOVIES.results.map((item) => (
        <Movie key={item.id} movieData={item} />
      ))}
    </div>
  </React.StrictMode>
);
