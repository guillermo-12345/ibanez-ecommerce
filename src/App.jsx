import './App.css';
import 'bootstrap';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import React from 'react';

function App(){
  
  return (
  
    <div className="App">
    <NavBar/>
    <ItemDetailContainer/>
    <ItemListContainer greeting={"Bienvenidos"}/>
    </div>
  );
}

export default App;