import React from 'react'
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <div className='btnCheckOut'>
        <Link to={'/Cart'}>CHECK OUT</Link>
      </div>
    </>
    // onClick={() => onAdd(number)}
  )
}

export default Cart