import { useState, useEffect } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContexProvider =({children}) =>{

    const [cartList, setCartList] = useState([]);

    const [quantityProducts, setQuantityProducts] = useState(0);
    const getQuantity = () => {
        let quantity = 0;
        cartList.forEach(product => quantity += product.cant);
        setQuantityProducts(quantity);
        console.log("quntity", quantity)
      
    }



    useEffect(() => {
        getQuantity();
    }, [cartList]);

    const addItem = (product) => {
        if (isInCart(product.id)) {
            const found = cartList.find(p => p.id === product.id)
            const index = cartList.indexOf(found);
            const aux = [...cartList];
            aux[index].quantity += product.quantity;
            setCartList(aux)
        } else {
            setCartList([...cartList, product]);
        }
    }

    const removeItem = (id) => {
        setCartList(cartList.filter(product => product.id !== id));
        console.log("cartList", cartList)
    }

    const isInCart = (id) => {
        return cartList.some(products => products.id === id);
    }

    const clear = () => {
        setCartList([]);
    }

    const totalPrice = () => {
        return cartList.reduce((prev, act) => prev + act.cant * act.price, 0);
    }

    const totalProducts = () => {
        return cartList.reduce((acc, productAct) => acc + productAct.quantity, 0);
    }

    return(
        <CartContext.Provider value={{
            cartList,
            addItem, 
            removeItem, 
            clear,
            getQuantity,
            totalPrice,
            totalProducts,
            isInCart
            }}>
            {children}
        </CartContext.Provider>
    );
}


export default CartContexProvider;