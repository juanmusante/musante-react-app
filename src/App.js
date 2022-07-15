import React from "react";
import './App.css';
import NavBar from './Components/NavBar.js';
import ItemDetailContainer from "./Containers/ItemDetailContainer";
// import ItemListContainer from './Containers/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ItemListContainer saludo = "HOLA MUNDO 👋🏻!!! ItemListContainer"/> */}
      <ItemDetailContainer />
    </div>
  );
}
export default App;
