import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../Components/ItemCount';
import CheckOutBtn from './CheckOutBtn';

const ItemDetail = ({ product }) => {
    const [quantity, setQuantity] = useState(true)

    const onAdd = (quantityToAdd) => {
        alert("Seleccionaste " + quantityToAdd + " máquinas.");
        if(quantityToAdd !== 0){
            setQuantity(false)
        }
    }

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
                {
                    quantity
                    ? <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/>
                    : <CheckOutBtn />
                }
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