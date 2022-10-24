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
                resolve(dataFromFirestore.filter((item)=>item.categoria === category));
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
        
            <section className="py-5 text-center container">
            <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">ALQUILÁ Y VIAJÁ SEGURO</h1>
                <p className="lead text-muted">¿En qué vehículo estás pensando?</p>
                <p>
                </p>
            </div>
            </div>
        </section>
        <div ><ItemList listCars={listCars}/> </div>
        </>
    )
}

export default ItemListContainer;