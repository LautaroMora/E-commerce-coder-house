import { createContext,  useState} from "react";


export const CartContext = createContext();

const CartContexProvider =({children}) =>{

    const [cartList, setCartList] = useState([]);

    const addItem = (product,contador) => {
        if (isInCart(product.id)) {
            const found = cartList.find(p => p.id === product.id);
            const index = cartList.indexOf(found);
            const aux = [...cartList];
            aux[index].quantity += contador;
            aux[index].precio += product.precio*contador;
            setCartList(aux);
        } else {
            setCartList([...cartList,{...product, quantity : contador, precio: product.precio*contador}])
        }
    }

    const removeItem = (id) => {
        setCartList(cartList.filter(product => product.id !== id));
    }

    const isInCart = (id) => {
        return cartList.some(products => products.id === id);
    }

    const clear = () => {
        setCartList([]);
    }

    const totalPrice =  cartList.reduce((prev, act) => prev +  act.precio, 0);
    

    const totalProducts = cartList.reduce((acc, product) => acc + product.quantity, 0);

    return(
        <CartContext.Provider value={{
            cartList,
            addItem, 
            removeItem, 
            clear,
            totalPrice,
            totalProducts,
            isInCart
            }}>
            {children}
        </CartContext.Provider>
    );
}


export default CartContexProvider;