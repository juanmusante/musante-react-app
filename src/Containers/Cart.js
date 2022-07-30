import React, { useContext } from 'react'
import { CartContext } from '../Components/CartContext'
import { Link } from "react-router-dom";

const Cart = ({ product }) => {

  const test = useContext(CartContext)

  // aca se comprueba si el localStorage esta vacio o no, para mostrarlo

  return (
    <>
      <div className='cartHeader'>
        <h1>TU CARRITO</h1>
        {test.cartList < 1
          ? <div className='startBuyingDiv'>
            <p>~ CARRITO VACIO ~</p>
            <Link className='startBuying' to={'/'}>INICIA TU COMPRA</Link>
          </div>
          : <button className='btnVaciar' onClick={test.clear}>VACIAR CARRITO</button>}
      </div>
      {
        test.cartList.length > 0 && test.cartList.map(product => (
          <div className="cartDetail">
            <div>
              <img className="imgCartDetail" src={product.img} alt="#" />
            </div>
            <div className='cartData'>
              <h2 className='cartTipe'>{product.tipo}</h2>
              <h3 className='cartModel'>Modelo {product.modelo}</h3>
              <h5 className='cartPrice'>${product.precio}.- C/U</h5>
              <h6 className='cartQty'>{product.qty} Unidades</h6>
            </div>
            <div>
              <button className='deleteBtn' onClick={() => test.removeItem(product.id)}>ELIMINAR</button>
            </div>
            <div>
            </div>
          </div>
        ))
      }
      <hr />
      <p className='orderSumary'>ORDER SUMARY</p>
      <div className='divTotal'>
        <h3 className='total'>TOTAL: ${test.calcItemsTotal()}.-</h3>
        {test.cartList < 1
        ?  ''
        :<button className='btnPay'>REALIZAR PAGO</button>}
      </div>
    </>
  )
}

export default Cart