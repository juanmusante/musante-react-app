import { createContext, useState  } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (product, qty) => {
        let isInCart = (id) => cartList.includes(product => product.id === id) ? false : true;
        if(isInCart(false)){
            setCartList([...cartList, {
                id: product.id, 
                tipo: product.tipo, 
                modelo: product.modelo, 
                precio: product.precio,
                img: product.img[0],
                qty: qty
            }])
        }else{
            setCartList([...cartList, {...product, qty}])
        }
    }

    const removeItem = (id) => {
        let newState = cartList.filter(product => product.id !== id);
        setCartList(newState);
        
        
    }
    const clear = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{cartList,
            addItem,
            removeItem,
            clear}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider