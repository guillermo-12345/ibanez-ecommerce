import './App.css';
import 'bootstrap';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import React from 'react';
import { Routes,Route } from 'react-router-dom';
/* import { OptionList } from './asyncMock'; */
import { ItemDetail } from './components/ItemDetail/ItemDetail';
import {Link} from 'react-router-dom';
import {Contact} from './views/Contact';
 
function App(){
  
  return (
    <div className="App">
      <NavBar/>
      
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Bienvenidos"}/>}/>
        <Route path="/category/:id" element={<ItemListContainer />}/>
        <Route path="/product/:id" element={<ItemDetail/>}/>
        <Route path ='/contact' element={<Contact/>}/>
        <Route path="/cart" element={<ItemDetailContainer/>}/>
        <Route path="/checkout" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
        
      </Routes>
      <Link to={"/"}> <button className="my-xxl-5 justify-content-end btn btn-outline-success">🏠 HOME</button></Link>
{/*       <OptionList/>
 */}    </div>
  );
}

export default App;