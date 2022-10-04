import { useContext } from "react";
import { CartContext } from "./CartContenx";

const Cart = () => {
        
        const ctx = useContext(CartContext);
        
        return <>
        <h1>Resumen de alquiler</h1>
        {
            ctx.map(item =><li>{item}</li>)
        }

        </>;
    };

export default Cart;
