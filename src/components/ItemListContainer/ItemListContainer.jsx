import React, { useEffect, useState } from 'react';
import {ItemList} from "../ItemList/ItemList";
import { useParams } from 'react-router-dom'
/* import { getProduct, getProductsByCategory } from '../../asyncMock'; */
import {getDocs, collection, query, where} from 'firebase/firestore'
import {db} from '../../service/firebase/firebaseConfig'


  const ItemListContainer = ({greeting},)=> {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
      setLoading(true)

      const collectionRef = categoryId
          ? query(collection(db, 'items'), where('category', '==', categoryId))
          : collection(db, 'items')

      getDocs(collectionRef)
          .then(response => {
              const productsAdapted = response.docs.map(doc => {
                  const data = doc.data()
                  return { id: doc.id, ...data }
              })
              setProducts(productsAdapted)
          })
          .catch(error => {
              console.log(error)
          })
          .finally(() => {
              setLoading(false)
          })
  }, [categoryId])
      return (

          <div className=' fw-bolder'>
            <h1 className=' rounded-5 text-uppercase bd-blue-600  '>{greeting}</h1>
				<div className=' text-dark-emphasis fw-bolder' >{loading ? (<div>...loading</div>) : (
                <ItemList products={products} />
            )}</div></div>

      )
}
export default ItemListContainer;

