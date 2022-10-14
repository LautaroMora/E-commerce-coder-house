import { useContext } from "react";
import { CartContext } from "./CartContext";
import {Link} from 'react-router-dom';
import { serverTimestamp, doc, setDoc,collection, increment, updateDoc } from "firebase/firestore";
import {db} from  '../utils/firebaseConfig';



const Cart = () => {
        
        const ctx = useContext(CartContext);
        
        
        const createOrder = async () =>{
            const itemsForDB = ctx.cartList.map( item => ({
                id : item.id,
                title : item.modelo,
                price : item.precio,
                quantity : item.cant
            }))
            let order = {
                buyer : {
                    name : "Leo Messi",
                    email : "leo@messi.com",
                    phone : "1010101"
                }, 
                items : itemsForDB,
                date : serverTimestamp(),
                total : ctx.calcTotal()
            }
            const newOrderRef = doc(collection (db, "orders"));
            await setDoc(newOrderRef, order);
            
            ctx.cartList.forEach(async (item) => {  
            const itemRef = doc(db, "autos", item.id);
                await updateDoc(itemRef, {
                cant: increment(-item.cant)
                });
            });

            ctx.clear();

            alert ('Tu orden se ha generado! Éste es el ID de tu orden: '+newOrderRef.id)
        }
        
        return <>
        <h1>Resumen de alquiler</h1>
        <button onClick={ctx.clear} type="button" className="btn btn-dark">Vaciar Carrito </button>
        <Link to='/'><button type="button" className="btn btn-dark">Seguir comprando </button></Link>
        {
            ctx.cartList.map(item =>    
            <div class="row mb-2">
                <div class="col-md-6">
                        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-primary">{item.marca}</strong>
                            <h3 class="mb-0">{item.modelo}</h3>
                            <div class="mb-1 text-muted">Días de alquiler: {item.cant}</div>
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
        <button onClick={createOrder} type="button" className="btn btn-dark">Checkout </button>
        <h3 class="mb-0">Días de alquiler: {ctx.calcItemCant}</h3>
        <h3 class="mb-0">Total: {ctx.totalPrice}</h3>

        </>;
    };

export default Cart;
