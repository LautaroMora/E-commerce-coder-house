import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartContextProvider from "./components/CartContext";
import Footer from './components/Footer';

const App = () => {
  return (
    <>    
      <CartContextProvider>
        <Router>
        <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/category/:category" element={<ItemListContainer />}/>
              <Route path="details/:id" element={<ItemDetailContainer />}/>
              <Route path="/cart" element={<Cart />}/>
            </Routes>
          <Footer/>
        </Router>
        </CartContextProvider>
    </>
  );
};
export default App;
