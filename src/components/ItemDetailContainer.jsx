import { useEffect, useState } from "react";
import customFetch from './customFetch.js';
import Cars from './Cars';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {

    const [auto, setDetalle] = useState ({});

    useEffect(() =>{
        customFetch(Cars[1])
        .then(data =>setDetalle(data))
    },[]);


    return ( 
        <>
        <div >
            <ItemDetail auto={auto}/> 
        </div>

        </>
    )
}

export default ItemDetailContainer;