import './App.css';
import 'bootstrap';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import React from 'react';
import { Routes,Route } from 'react-router-dom';
import { OptionList } from './asyncMock';

function App(){
  
  return (
    <div className="App">
      <NavBar/>
      
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Bienvenidos"}/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/category/:productId" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
        
      </Routes>
      <OptionList/>
    </div>
  );
}

export default App;