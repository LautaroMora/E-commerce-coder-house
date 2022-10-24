import React from "react";
import {Link} from 'react-router-dom';



const Item =({auto}) =>{



    return(
        <>
            <div className="col">
                <div className="card shadow-sm">
              
                        <img src={auto.img} alt={auto.modelo} className="card-img-bottom" id={auto.id} width="100%" height="100%">

                    </img>
                        <div className="card-body">
                                <h5 className="card-title">{auto.marca} {auto.modelo}</h5>
                                <p className="card-text">Precio por día: ${auto.precio}.
                                <br/>
                                Cantidad de Pasajeros: {auto.pasajeros}.
                                <br/>
                                Días disponible: {auto.cant}.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                            <Link to={`/details/${auto.id}`}><button type="button" className="btn btn-sm btn-outline-secondary botonReserva2" id='botonReserva'>Más información</button></Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};






export default Item;  