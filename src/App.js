import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartContextProvider from "./components/CartContext";

const App = () => {
  return (
    <>    
      <CartContextProvider>
        <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="ALQUILÁ Y VIAJÁ SEGURO" />}/>
            <Route path="/category/:category" element={<ItemListContainer />}/>
            <Route path="details/:id" element={<ItemDetailContainer />}/>
            <Route path="/cart" element={<Cart />}/>
          </Routes>
        </Router>
        </CartContextProvider>
    </>
  );
};
export default App;
