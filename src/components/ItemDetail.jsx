import React from "react";
import ItemCount from "./ItemCount"; 



const ItemDetail =({auto}) =>{


    return(
        <>
            <div className="card mb-3">
                        <img src={auto.img} alt={auto.modelo} className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">{auto.marca} {auto.modelo}</h5>
                                <p className="card-text">                          
                                {auto.description}
                                </p>
                            <p class="card-text"
                                ><small className="text-muted"> 
                                    Precio por día: ${auto.precio}.
                                    <br/> 
                                    Cantidad de Pasajeros: {auto.pasajeros}.
                                </small>
                            </p>
                                <ItemCount stock={20} initial={0} item={auto}/>      

                            

                            
    </div>
</div>





        </>
    )
};






export default ItemDetail;  