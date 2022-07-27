import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './Styles/NavBar.css';
import './Styles/ItemListContainer.css';
import './Styles/ItemCount.css';
import './Styles/ItemDetail.css';
import './Styles/CheckOutBtn.css';
import './Styles/Cart.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);