import './App.css';
import 'bootstrap';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import React from 'react';
import { Routes,Route } from 'react-router-dom';
/* import { OptionList } from './asyncMock'; */
import {Link} from 'react-router-dom';
import {Contact} from './views/Contact';
import { Cart } from './views/Cart';
import { CheckOut } from './views/CheckOut';
 
function App(){
  
  return (
    <div className="App">
      <NavBar/>
      
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Bienvenidos"}/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer />}/>
        <Route path="/product/:prodid" element={<ItemDetailContainer/>}/>
        <Route path ='/contact' element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<CheckOut/>}/>
        <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
        
      </Routes>
      <Link to={"/"}> <button className="my-xxl-5 justify-content-end btn btn-outline-success">🏠 HOME</button></Link>
{/*       <OptionList/>
 */}    </div>
  );
}

export default App;