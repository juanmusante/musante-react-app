import React, { useState } from 'react'

export function ItemCount({stock = 0, initial = 0, onAdd}) {
    const [number, setNumber] = useState (0);

    const incraese = () => {
        if (number < stock){
            setNumber(number + 1)
        }
    }
    const decrease = () => {
        if (number > initial){
            setNumber(number - 1)
        }
    }

    return (
        <nav className='counter'>
            <div className='view'>
                <button className='button' onClick={incraese}> + </button>
                <p className='text'>{number}</p>
                <button className='button' onClick={decrease}> - </button>
            </div>
           <button className='buttonShop' onClick={() => onAdd(number)}>ADD TO CART</button>
        </nav>
    );
}

export default ItemCount;