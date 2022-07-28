import { createContext, useState  } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    
    const addItem = (product) => {
        setCartList([...cartList, product])
    }
    const removeItem = (product) => {
        const index = cartList.indexOf(product);
        console.log(index)
        setCartList(cartList.splice(index, 1))
        
    }
    const clear = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{cartList, addItem, removeItem, clear}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider