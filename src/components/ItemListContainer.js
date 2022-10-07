import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import {db} from  '../utils/firebaseConfig';
import { collection, getDocs } from "firebase/firestore";



const ItemListContainer = (props) => {
    const [listCars, setListCars] = useState ([]);
    const{category} = useParams();


const customFetch = (task) => {    
    return new Promise(async (resolve) => {
        const querySnapshot = await getDocs(collection(db, "autos"));
        const dataFromFirestore = querySnapshot.docs.map(item =>({
        id : item.id,
        ...item.data()
    }))

            if (category){
                resolve(dataFromFirestore.filter((item)=>item.categoria == category));
            }else resolve (dataFromFirestore)
        resolve(task);

    });
};

useEffect(() =>{
    customFetch(listCars)
    .then(data =>setListCars(data))
},[category]);


    return ( 
        <>
        <h1 className='titulo'>{props.greeting}</h1>
        <div ><ItemList listCars={listCars}/> </div>
        </>
    )
}

export default ItemListContainer;