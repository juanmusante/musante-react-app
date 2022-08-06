import { createContext, useState  } from 'react';

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
            }]);
        }else{
            found.qty += qty;
        }
    }

    const removeItem = (id) => {
        let newState = cartList.filter(product => product.id !== id);
        setCartList(newState);
    }

    const clear = () => {
        setCartList([]);
    }

    const calcItemsQty = () => {
        let qtys = cartList.map(product => product.qty);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    const calcEachTotal = (id) =>{
        let index = cartList.map(product => product.id).indexOf(id);
        return cartList[index].precio * cartList[index].qty;
    }

    const calcItemsTotal = () => {
        let total = cartList.map(product => calcEachTotal(product.id));
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