import React from "react";
import Item from "./Item";

const ItemList = ({listCars}) => {
    console.log(listCars)
    return (
            <>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" id="tarjetas">       
                        {listCars.map((auto)=>(<Item auto={auto} key={auto.key}/>))}
                    </div>
                </div>
            </div>
            </>
        )
    };

export default ItemList;
