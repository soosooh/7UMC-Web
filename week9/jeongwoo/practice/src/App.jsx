import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import TodoApp from './components/TodoApp.jsx';
import store from './redux/store';

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f0f2f5;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Provider store={store}>
      <AppWrapper>
        <TodoApp />
      </AppWrapper>
    </Provider>
  );
};

export default App;