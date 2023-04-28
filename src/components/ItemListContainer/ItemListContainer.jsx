import React, { useEffect, useState } from 'react';
import {products} from ".../data/products.json";
import {ItemList} from "../ItemList/ItemList";

const styles = {
    margin: "0 auto",
    width: 1170,
    background: "gray",
    height: "100vh",
    color: "white",
  };
  
 const Container = (props) => {
    return <div style={styles}>{props.children}</div>;
  };
  

export const ItemListContainer = ({greeting})=> {
  const [list,setList] =  useState([])

  useEffect(()=>
  {
    const productList= new Promise((resolve,reject) =>{
      setTimeout(()=>{
        resolve(products)
      },2000)
    })
    productList.then(result=>setList(result))
  }
  
  )

    return (

        <div className='fw-bolder'>
            {greeting}
        </div>
    )
}