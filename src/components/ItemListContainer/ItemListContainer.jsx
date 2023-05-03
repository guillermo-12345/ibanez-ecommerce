import React, { useEffect, useState } from 'react';
import {ItemList} from "../ItemList/ItemList";

  const Container = ({ children }) => (
    <div style={{ width: 1170, margin: "30px auto" }}>{children}</div>
  )
  const ItemListContainer = ({greeting},)=> {
    const [productsFetch, setProductsFetch] = useState([]);

    useEffect(() => {
      fetch('../../data/products.json')
        .then((res) => res.json())
        .then((data) => setProductsFetch(data))
        .catch((err) => console.log(err));
    
    } , [] )
      return (
        <Container className="">
          <div className='fw-bolder'>
            <h1 className=' text-uppercase bd-blue-500 opacity-25 '>{greeting}</h1>
            <ItemList  productsFetch={productsFetch}/>        
          </div>
        </Container>
      )
}
export default ItemListContainer;