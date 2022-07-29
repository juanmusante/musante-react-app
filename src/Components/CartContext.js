import { createContext, useState  } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    

    const isInCart = (id) => cartList.find(product => product.id === id) ? true : false;

    const addItem = (product, qty) => {
        if(isInCart(product.id)){
            setCartList([...cartList, {
                qty: qty
            }])
        }else{
            setCartList([...cartList, {
                id: product.id, 
                tipo: product.tipo, 
                modelo: product.modelo, 
                precio: product.precio,
                img: product.img[0],
                qty: qty
            }])
        }
    }

    // setCartList(cartList.map(product => {
    //     return maquinas.id === product.id ? {...item, qty: product.qty + qty} : product
    // }));

    const removeItem = (id) => {
        let newState = cartList.filter(product => product.id !== id);
        setCartList(newState);
        
        
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