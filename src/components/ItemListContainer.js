import React, {useState, useEffect} from 'react';
import Cars from './Cars';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';



const ItemListContainer = (props) => {
    const [listCars, setListCars] = useState ([]);
    const{category} = useParams()
    console.log(category)

    const customFetch = (task) => {    
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (category){
                    resolve(Cars.filter((item)=>item.categoria== category));
                }else resolve (Cars)
            resolve(task);
            }, 2000);
        });
};

    useEffect(() =>{
        customFetch(Cars)
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