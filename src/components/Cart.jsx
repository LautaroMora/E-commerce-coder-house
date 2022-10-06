import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
        
        const ctx = useContext(CartContext);
        
        return <>
        <h1>Resumen de alquiler</h1>
        <button onClick={ctx.clear} type="button" className="btn btn-dark">Vaciar Carrito </button> 
        {
            ctx.cartList.map(item =>    
            <div class="row mb-2">
                <div class="col-md-6">
                        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-primary">{item.marca}</strong>
                            <h3 class="mb-0">{item.modelo}</h3>
                            <div class="mb-1 text-muted">Nov 12</div>
                            <p class="card-text mb-auto">{item.description}</p>
                            <button onClick={()=>ctx.removeItem(item.id)} type="button" className="btn btn-dark">Eliminar producto </button>
                            </div>
                            <div class="col-md-6">
                            <img src={item.img} alt={item.modelo} id={item.id} class="card-img-bottom " width="70%" height="70%"></img>
                            <h3 class="mb-0">${item.precio}</h3>
                            </div>
                        </div>
                </div>
            </div>                      
            )
        }

        </>;
    };

export default Cart;
