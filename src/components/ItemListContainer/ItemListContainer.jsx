import React, { useEffect, useState } from 'react';
import {ItemList} from "../ItemList/ItemList";

/* const styles = {
    margin: "0 auto",
    width: 1170,
    background: "gray",
    height: "100vh",
    color: "white",
  };
 const Container = (props) => {
    return <div style={styles}>{props.children}</div>;
  }; */
  const ItemListContainer = ({greeting},)=> {
    const [productsFetch, setProductsFetch] = useState([]);

  useEffect(() => {
    fetch('../../data/products.json')
      .then((res) => res.json())
      .then((data) => setProductsFetch(data))
      .catch((err) => console.log(err));
  
  } , [] )
    return (
        <div className='fw-bolder'>
        {greeting}
        <ItemList productsFetch={productsFetch}/>        
        </div>
    )
}
export default ItemListContainer;