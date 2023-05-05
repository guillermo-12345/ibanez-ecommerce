import { useState,useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductById } from "../../asyncMock";
import { useParams } from 'react-router-dom'


const ItemDetailContainer=()=>{
    const {prodid}=useParams()

         const [product,setProduct] =useState(null)
        useEffect(()=>{

            getProductById(prodid)
            .then(response=>{
                setProduct(response)
            })
            .catch(error=>{
                console.error(error)
            })
        },[prodid])


    return(

       <ItemDetail {...product}/> 
    )
}

export default ItemDetailContainer;