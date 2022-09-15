import React from "react";
import Item from "./Item";

const ItemList = ({listCars}) => {
    console.log(listCars)
    return (
            <>
                <div>ItemList
                    {listCars.map((auto)=>(<Item auto={auto} key={auto.key}/>))}
                </div>
            </>
        )
    };

export default ItemList;
