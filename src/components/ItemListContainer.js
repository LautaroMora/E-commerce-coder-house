import React, {useState, useEffect} from 'react';
import Cars from './Cars';
import customFetch from './customFetch.js';
import ItemList from './ItemList';


const ItemListContainer = (props) => {

    const [listCars, setListCars] = useState ([]);

    useEffect(() =>{
        customFetch(Cars)
        .then(data =>setListCars(data))
    },[]);


        console.log(listCars).
        console.log(Cars)
    return ( 
        <>
        <h1>{props.greeting}</h1>
        <div><ItemList listCars={listCars}/> </div>
        </>
    )
}

export default ItemListContainer;