import { useEffect, useState } from "react";
import Cars from './Cars';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [auto, setDetalle] = useState ({});
    const{id} = useParams()
    console.log(id)

    const customFetch = (task) => {    
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (id){
                    resolve(Cars.find((item)=>item.id == id));
                }else resolve (Cars)
            }, 2000);
        });
    };


        useEffect(() =>{
            customFetch(id)
            .then(data =>setDetalle(data))
        },[id]);


    return ( 
        <>
        <div >
            <ItemDetail auto={auto}/> 
        </div>

        </>
    )
}

export default ItemDetailContainer;