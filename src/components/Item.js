import React from "react";



const Item =({auto}) =>{
    console.log (auto)
    return(
        <>
            <div className="col">
                <div className="card shadow-sm">
                        <title>{auto.marca}{auto.modelo}</title>
                        <img src={auto.img} alt={auto.modelo} className="card-img-bottom" id={auto.id} width="100%" height="100%">

                        </img>
                        <text x="50%" y="50%" fill="#eceeef"dy=".3em">{auto.marca} {auto.modelo}</text>
                        <div className="card-body">
                                <p className="card-text">Precio por día: ${auto.precio}.
                                <br/>
                                Cantidad de Pasajeros: {auto.pasajeros}.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary botonReserva2" id='botonReserva'>Reservar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};






export default Item;  