import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';

function ItemCount({ stock, initial }) {
  const [contador, setContador] = useState(initial);
  const [carrito, setCarrito] = useState(initial)
  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const restar = () => {
    if (contador > initial) {
      setContador(contador - 1);
    }
  };

  const agregarAlCarrito = () => {
    setCarrito(contador)
    if (contador===1){
    alert("Estas llevando un auto por "+contador+" día.");
    }else if(contador>1) {
      alert("Estás llevando un auto por "+contador+" días.");
    } else {
      alert("No agregaste nada al carrito");
  }
  };

  return (
    <>    
    { carrito === 0 ?
      <>
        <div>Días {contador}</div>
        <button onClick={() => restar()} type="button" className="btn btn-light">-</button>
        <button onClick={() => agregarAlCarrito()} type="button" className="btn btn-dark">Agregar al Carrito </button>
        <button onClick={() => sumar()} type="button" className="btn btn-light">+</button>
      </>
    : <Link to='/cart'><button  type="button" className="btn btn-success">Confirmar reserva</button></Link>}
    </>
  );
}

export default ItemCount;
