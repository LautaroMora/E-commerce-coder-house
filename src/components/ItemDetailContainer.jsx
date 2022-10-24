import { useEffect, useState } from "react";
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import {db} from  '../utils/firebaseConfig';
import { collection, getDocs } from "firebase/firestore";


const ItemDetailContainer = () => {

    const [auto, setDetalle] = useState ({});
    const{id} = useParams();


        const customFetch = (task) => {    
            return new Promise(async (resolve) => {
                const querySnapshot = await getDocs(collection(db, "autos"));
                const dataFromFirestore = querySnapshot.docs.map(item =>({
                id : item.id,
                ...item.data()
            }))
        
                    if (id){
                        resolve(dataFromFirestore.find((item)=>item.id === id));
                    }else resolve (task)

        
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