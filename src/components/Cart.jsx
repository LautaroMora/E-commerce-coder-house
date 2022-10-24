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
                quantity : item.quantity,
                
            }))
            let order = {
                buyer : {
                    name : "Leo Messi",
                    email : "leo@messi.com",
                    phone : "1010101"
                }, 
                items : itemsForDB,
                date : serverTimestamp(),
            }
            const newOrderRef = doc(collection (db, "orders"));
            await setDoc(newOrderRef, order);
            
            ctx.cartList.forEach(async (item) => {  
            const itemRef = doc(db, "autos", item.id);
                await updateDoc(itemRef, {
                cant: increment(-item.quantity)
                });
            });
            
            ctx.clear();

            alert ('Tu orden se ha generado! Éste es el ID de tu orden: '+newOrderRef.id)
        }
        
        return <>
        { ctx.totalProducts >= 1 ?
                        <>
                        <h1>Resumen de alquiler</h1>
                        <button onClick={ctx.clear} type="button" className="btn btn-dark">Vaciar Carrito </button>
                        <Link to='/'><button type="button" className="btn btn-dark">Seguir comprando </button></Link>
                        {
                            ctx.cartList.map(item =>    
                            <div className="row mb-2" key={item.id}>
                                <div className="col-md-6">
                                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                            <div className="col p-4 d-flex flex-column position-static">
                                            <strong className="d-inline-block mb-2 text-primary">{item.marca}</strong>
                                            <h3 className="mb-0">{item.modelo}</h3>
                                            <div className="mb-1 text-muted">Días de alquiler: {item.quantity}</div>
                                            <p className="card-text mb-auto">{item.description}</p>
                                            <button onClick={()=>ctx.removeItem(item.id)} type="button" className="btn btn-dark">Eliminar producto </button>
                                            </div>
                                            <div className="col-md-6">
                                            <img src={item.img} alt={item.modelo} id={item.id} className="card-img-bottom " ></img>
                                            <h2 className="mb-0">${item.precio}</h2>
                                            </div>
                                        </div>
                                </div>
                            </div>                      
                            )
                        }
                        <button onClick={createOrder} type="button" className="btn btn-dark">Checkout </button>
                        <h3 className="mb-0">Días de alquiler: {ctx.totalProducts}</h3>
                        <h3 className="mb-0">Total: {ctx.totalPrice}</h3>
                        </> :
                    <>
                    <h3> Tu carrito está vacío</h3>
                    <Link to='/'><button type="button" className="btn btn-dark">Seguir comprando </button></Link>
                    </>
        }
        </>
    };

export default Cart;
