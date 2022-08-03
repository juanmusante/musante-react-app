import { createContext, useState  } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (product, qty) => {
        let found = cartList.find(item => item.id === product.id)
        if(found === undefined){
            setCartList([...cartList, {
                id: product.id, 
                tipo: product.tipo, 
                modelo: product.modelo, 
                precio: product.precio,
                img: product.img,
                stock: product.stock,
                qty: qty
            }])
            // aca se graba item y qty en el localStorage
        }else{
            found.qty += qty;
            // found.qty -= stock;
        }
    }

    const removeItem = (id) => {
        let newState = cartList.filter(product => product.id !== id);
        setCartList(newState);
    }
    const clear = () => {
        setCartList([])
    }
    const calcItemsQty = () => {
        let qtys = cartList.map(product => product.qty);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }
    const calcItemsTotal = () => {
        let total = cartList.map(product => product.precio);
        return total.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    return (
        <CartContext.Provider value={{cartList,
            addItem,
            removeItem,
            clear,
            calcItemsQty,
            calcItemsTotal}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider