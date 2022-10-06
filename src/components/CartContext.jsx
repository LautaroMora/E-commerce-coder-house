import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContexProvider =({children}) =>{

    const [cartList, setCartList] = useState([]);

    const addItem = (product,cant)=>{
        
        setCartList([...cartList, product]);
    }
    
    const removeItem = (id) =>{
        setCartList(cartList.filter(item=>item.id !== id))

    }

    const calcItemCant = () =>{
        let cant = cartList.map (item => item.cant);
        return cant.reduce(((previousValue, currentValue)=>previousValue + currentValue),0);
    } 

    const clear = () =>{
        setCartList ([])
    }

    return(
        <CartContext.Provider value={{
            cartList,
            addItem, 
            removeItem, 
            clear,
            calcItemCant}}>
            {children}
        </CartContext.Provider>
    );
}


export default CartContexProvider;