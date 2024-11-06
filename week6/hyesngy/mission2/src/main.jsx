import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TokenRefresher from './api/TokenRefresher'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TokenRefresher>
      <App />
    </TokenRefresher>
  </React.StrictMode>
)
