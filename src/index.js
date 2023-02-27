import 'modern-normalize/modern-normalize.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter
      // basename="/PET_yummy_meal/"
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
