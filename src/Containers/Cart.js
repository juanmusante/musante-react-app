import React, { useContext } from 'react'
import { CartContext } from '../Components/CartContext'

const Cart = ({ product }) => {

  const test = useContext(CartContext)
  console.log(test.cartList)

  const remove = (product) => {
    alert ('PRODUCTO ELIMINADO');
    test.removeItem(test.cartList.splice(product));
  }

  const emptyCart = () => {
    test.clear();
  }

  return (
    <>
    <div className='cartHeader'>
      <h1>TU CARRITO</h1>
      <button onClick={() => {emptyCart()}}>VACIAR CARRITO</button>
    </div>
    {
      test.cartList.length > 0 && test.cartList.map(item => (
        <div className="cartDetail">
          <div>
              <img className="imgCartDetail" src={item.img} alt="#" />
          </div>
          <div className='cartData'>
              <h2 className='cartTipe'>{item.tipo}</h2>
              <h3 className='cartModel'>Modelo {item.modelo}</h3>
              <h5 className='cartPrice'>${item.precio}.- C/U</h5>
              <h6 className='cartQty'>{test.quantity} Unidades</h6>
          </div>
          <div>
            <button className='crossBtn' onClick={() => remove(product)}>ELIMINAR</button>
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