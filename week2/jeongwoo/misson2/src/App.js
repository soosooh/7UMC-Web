import React from 'react';
import MovieList from './components/MovieList';

function App() {
  const appStyle = {
    backgroundColor: '#21264d',
    minHeight: '100vh',
    padding: '20px',
    color: 'white',
  };

  const titleStyle = {
    textAlign: 'center',
    marginBottom: '30px',
  };

  return (
    <div style={appStyle}>
      <h1 style={titleStyle}>영화 목록</h1>
      <MovieList />
    </div>
  );
}

export default App;