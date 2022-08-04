import React, { useContext } from 'react'
import { CartContext } from '../Components/CartContext'
import { Link } from "react-router-dom";
import { collection, serverTimestamp, setDoc, doc, increment, updateDoc } from 'firebase/firestore';
import { db } from "../Data/firebaseConfig";

const Cart = () => {
  const test = useContext(CartContext)
  // aca se comprueba si el localStorage esta vacio o no, para mostrarlo

  const createOrder = () => {
    let itemsInCart = test.cartList.map(item => ({
      id: item.id,
      title: item.modelo,
      price: item.precio,
      qty: item.qty
    }))

    let order = {
      buyer: {
        email: "richard@supermail.com",
        name: "Ricardo Sarambrotto",
        phone: "28873649"
      },
      date: serverTimestamp(),
      items: itemsInCart,
      total: test.calcItemsTotal()
    }
    // console.log(order)
    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"))
      await setDoc(newOrderRef, order)
      return newOrderRef;
    }

    createOrderInFirestore()
      .then(res => alert('Tu orden fue creada con el siguiente ID:' + res.id))
      .catch(err => console.log(err))

    test.cartList.forEach(async (item) => {
      const itemRef = doc(db, "products", item.id)
      await updateDoc(itemRef, {
        stock: increment(-item.qty)
      })
    })

    // vaciar carrito luego de crear orden
    test.clear()
  }

  return (
    <>
      <div className='cartHeader'>
        <h1>TU CARRITO</h1>
        {
          test.cartList < 1
            ? <div className='startBuyingDiv'>
              <p>~ CARRITO VACIO ~</p>
              <Link className='startBuying' to={'/'}>INICIA TU COMPRA</Link>
            </div>
            : <button className='btnVaciar' onClick={test.clear}>VACIAR CARRITO</button>
        }
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
          ? ''
          : <button onClick={createOrder} className='btnPay'>CREAR ORDEN</button>}
      </div>
    </>
  )
}

export default Cart