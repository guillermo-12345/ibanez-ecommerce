import React, { useEffect, useState } from 'react';
import {ItemList} from "../ItemList/ItemList";
import { useParams } from 'react-router-dom'
import { getProduct, getProductsByCategory } from '../../asyncMock';


  const categories = ["Notebook", "Celular", "Tablet"]
  const Container = ({ children }) => (
    <div style={{ width: 1170, margin: "30px auto" }}>{children}</div>
  )
  const ItemListContainer = ({greeting},)=> {
    const [productsFetch, setProducts] = useState([]);
    const { categoryId } = useParams()

    useEffect(() => {
      const asyncFunc = categoryId ? () => getProductsByCategory(categoryId) : getProduct

      asyncFunc().then((response) => {
        setProducts(response)
      })

  }, [categoryId])
      return (
        <Container className="">
          <div className=' fw-bolder'>
            <h1 className=' rounded-5 text-uppercase bd-blue-600  '>{greeting}</h1>
            {!productsFetch?.length ? (
				<div className=' text-dark-emphasis fw-bolder' >Loading...</div>
			) : (

			
            
            <ItemList  productsFetch={productsFetch}/> )} 
          </div>
        </Container>
      )
}
export default ItemListContainer;

