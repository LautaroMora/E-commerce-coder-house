import React, {useState, useEffect} from 'react';
import Cars from './Cars';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';



const ItemListContainer = (props) => {

    const [listCars, setListCars] = useState ([]);
    const{params} = useParams()
    console.log(params)

    const customFetch = (task) => {    
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (params){
                    resolve(Cars.filter((item)=>item.categoria== params));
                }else resolve (Cars)
            resolve(task);
            }, 2000);
        });
};

    useEffect(() =>{
        customFetch(Cars)
        .then(data =>setListCars(data))
    },[params]);


    return ( 
        <>
        <h1 className='titulo'>{props.greeting}</h1>
        <div ><ItemList listCars={listCars}/> </div>
        </>
    )
}

export default ItemListContainer;