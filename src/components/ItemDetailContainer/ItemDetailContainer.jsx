/* import { Container } from "react-bootstrap/Container"; */
import { useState,useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductById } from "../../asyncMock";
import { useParams } from 'react-router-dom'


const ItemDetailContainer=()=>{
    const {prodid}=useParams()
/*     const productList={
        title:"Notebook1",
        description: "lorem ipsum dolor sit amet, consectet, sed do eiusmod tempor incididunt ut labore et, consectetur adipiscing elit. Ut enim ad minim ven, quis nostrud, non proident",
        price:1000,
        img:"https://rukminim1.flixcart.com/image/416/416/jrxtea80/laptop-skin-decal/s/d/t/mcbk-gw11996-printed-destiny-2-skin-top-gadgets-wrap-13-original-imafdkmmqkfvphjh.jpeg?q=70",

    } */
        
         const [product,setProduct] =useState(null)
        useEffect(()=>{
            getProductById(prodid)
            .then(response=>{
                setProduct(response)
            })
            .catch(error=>{
                console.error(error)
            })
        },[])
/*         const productPromise= new Promise((resolve,reject) =>{
            setTimeout(()=>{
            resolve(productList)
            },2000)
        })
        productPromise.then(result=>setProduct(result))
        },[]) */ 
  /*       const [product,setProduct] =useState(null)
        useEffect(()=>{
            fetch('../../data/products.json')
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((err) => console.log(err))
        },[]) */

    return(
/*        <Container>
             
        </Container>  */
       /* {<ItemDetail product={product}/> }*/
       <ItemDetail {...product}/> 
    )
}

export default ItemDetailContainer;