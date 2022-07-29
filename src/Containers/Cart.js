import React, { useContext } from 'react'
import { CartContext } from '../Components/CartContext'

const Cart = ({ product }) => {

  const test = useContext(CartContext)
  console.log(test.cartList)

  return (
    <>
    <div className='cartHeader'>
      <h1>TU CARRITO</h1>
      <button onClick={test.clear}>VACIAR CARRITO</button>
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
    </>
  )
}

export default Cart