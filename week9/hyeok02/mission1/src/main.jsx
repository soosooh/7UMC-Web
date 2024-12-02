import React from 'react';
import ReactDOM from 'react-dom/client'; // createRoot API는 여기에서 가져옵니다.
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // createRoot로 초기화
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
