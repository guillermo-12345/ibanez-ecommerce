import './App.css';
import 'bootstrap';
import NavBar from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';


function App(){
  
  return (
  
    <div className="App">
    <NavBar/>
    <ItemDetailContainer/>
    <ItemListContainer greeting={"Bienvenidos"}/>
    <ItemCount initial={1} stockDisponible={10} onAdd={(counter) => console.log('cantidad agregada',counter)}/>
    </div>
  );
}

export default App;