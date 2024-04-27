import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { HashRouter } from "react-router-dom"; // Import HashRouter

ReactDOM.render(
  <React.StrictMode>
    <HashRouter> {/* Use HashRouter instead of BrowserRouter */}
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);