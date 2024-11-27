import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import modalReducer from './features/modal/modalSlice';
import App from './App';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);