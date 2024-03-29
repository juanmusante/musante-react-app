import React, { useState, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../Components/ItemCount';
import { Link } from "react-router-dom";
import { CartContext } from '../Components/CartContext';

const ItemDetail = ({ product }) => {
    const [quantity, setQuantity] = useState(true);
    const test = useContext(CartContext);

    const onAdd = (qty) => {
        if(qty !== 0){
            setQuantity(false);
            test.addItem(product, qty);
        }else{
            alert("No seleccionaste máquinas");
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
                    :   <div>
                            <div className='btnCheckOut'>
                                <Link to={'/Cart'}>CHECK OUT</Link>
                            </div>
                            <div className='btnKeepBuying'>
                                <Link to={'/'}>Seguir Comprando</Link>
                            </div>
                        </div>
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