import React, { useContext } from 'react'
import { CartContext } from '../Components/CartContext'

const Cart = () => {

  const test = useContext(CartContext)
  console.log(test.cartList)

  return (
    <>
    <h1 className='cartHeader'>TU CARRITO</h1>
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
              <h6 className='cartQty'>~qty selecionada~  Unidades</h6>
          </div>
          <div>
          <button>X</button>
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