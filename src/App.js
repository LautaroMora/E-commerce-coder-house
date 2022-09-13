import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount"; 

const App = ()=>{
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting='Alquilá y Viajá Seguro'/>
    <ItemCount stock={20} initial={0}/>
    </>
  );
}

export default App;
