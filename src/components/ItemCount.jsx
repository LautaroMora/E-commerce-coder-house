import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "./CartContext";

function ItemCount({item}) {
  
  const [contador, setContador] = useState(1);
  const [carrito, setCarrito] = useState(0);

  const ctx = useContext(CartContext);



  const sumar = () => {
    if (contador < item.cant) {
      setContador(contador + 1);
    }
  };
  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const agregarAlCarrito = () => {
    setCarrito(contador)
    if (contador===1){
    ctx.addItem(item,contador);
    }else if(contador>1) {
      ctx.addItem(item,contador);
      
  }
  };

  return (
    <>    
    { carrito === 0 ?
      <>
        <div>Días  {contador}</div>
        <button onClick={() => restar()} type="button" className="btn btn-light"  disabled={ contador === 1 }>-</button>
        <button onClick={() => agregarAlCarrito()} type="button" className="btn btn-dark" >Agregar al Carrito </button>
        <button onClick={() => sumar()} type="button" className="btn btn-light" disabled={ contador === item.cant }>+</button>
      </>
    : <Link to='/cart'><button  type="button" className="btn btn-success">Confirmar reserva</button></Link>}

    </>
  );
}

export default ItemCount;
