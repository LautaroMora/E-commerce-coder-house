import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContexProvider =({children}) =>{

    const [cartList, setCartList] = useState(['fitito', 'camaro']);

    return(
        <CartContext.Provider value={cartList}>
            {children}
        </CartContext.Provider>
    );
}


export default CartContexProvider;