import { useContext } from "react";
import { BsCart3 } from "react-icons/bs";
import "../App.css"
import { CartContext } from "./CartContext";

const CartWidget = () => {

    const {calcItemCant} = useContext(CartContext);

  return (
  <>
  <button type="button" className="btn position-relative cart-container">
  <BsCart3 className="cart"/>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {calcItemCant}
  </span>
</button>
  </> )
};


export default CartWidget;
