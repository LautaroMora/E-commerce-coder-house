import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>    
    
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="ALQUILÁ Y VIAJÁ SEGURO" />}/>
          <Route path="/category/:category" element={<ItemListContainer />}/>
          <Route path="details/:details" element={<ItemDetailContainer />}/>
        </Routes>
      </Router>
    </>
  );
};
export default App;
