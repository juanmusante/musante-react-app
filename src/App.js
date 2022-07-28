import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from './Components/NavBar.js';
import ItemDetailContainer from "./Containers/ItemDetailContainer";
import ItemListContainer from './Containers/ItemListContainer.js';
import Cart from "./Containers/Cart";
import CartContextProvider from './Components/CartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/categoryId/:idCategory" element={<ItemListContainer />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          <Route path="/Cart/" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}
export default App;
