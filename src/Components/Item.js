import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div className="eachProduct">
      <div>
        <div>
          <img className="imgProduct" src={product.img} alt="#" />
          <button className="infoButton">ℹ️NFO</button>
        </div>
        <h2>{product.tipo}</h2>
        <h3>Modelo {product.modelo}</h3>
        <h5>${product.precio}.-</h5>
        <p>Stock Disponible: {product.stock}</p>
        {/* <p>{product.description}</p> */}
      </div>
      
    </div>
  );
};

export default Item;