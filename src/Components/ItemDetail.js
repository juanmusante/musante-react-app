import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemDetail = ({ product }) => {
  return (
    <>
    <div>
        <div className="productDetail">
            <div>
                <img className="imgProductDetail" src={product.img} alt="#" />
            </div>
            <div className='productData'>
                <h2 className='productTipe'>{product.tipo}</h2>
                <h3 className='productModel'>Modelo {product.modelo}</h3>
                <h5 className='productPrice'>${product.precio}.-</h5>
            </div>
            <div className='itemDescription'>
                <p>~{product.description}~</p>
            </div>
            <div>
                <p>Stock Disponible: {product.stock}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default ItemDetail;