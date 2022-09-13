import React from "react";
import { useState } from "react";

function ItemCount({ stock, initial }) {
  const [contador, setContador] = useState(initial);

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
    const onAdd = contador;
    if (onAdd>0){
    alert("Estas llevando un auto por "+onAdd+" días.");
    }else {
        alert("No agregaste nada al carrito");
    }
  };

  return (
    <>
      <div>Días {contador}</div>
      
      <button onClick={() => restar()}>-</button>
      <button onClick={() => agregarAlCarrito()}>Agregar al Carrito </button>
      <button onClick={() => sumar()}>+</button>
    
    </>
  );
}

export default ItemCount;
