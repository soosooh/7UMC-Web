import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';

function App() {
  const styles = {
    app: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f8f9fa',
      borderRadius: '10px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <Provider store={store}>
      <div style={styles.app}>
        <Header />
        <InputTodo />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
