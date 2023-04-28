/* import { Container } from "react-bootstrap/Container"; */
import { useState,useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";

const productList={
    title:"Notebook1",
    description: "lorem ipsum dolor sit amet, consectet, sed do eiusmod tempor incididunt ut labore et, consectetur adipiscing elit. Ut enim ad minim ven, quis nostrud, non proident",
    price:1000,
    img:"https://rukminim1.flixcart.com/image/416/416/jrxtea80/laptop-skin-decal/s/d/t/mcbk-gw11996-printed-destiny-2-skin-top-gadgets-wrap-13-original-imafdkmmqkfvphjh.jpeg?q=70",

}

export const ItemDetailContainer=()=>{
    const [product,setProduct] =useState({})
    useEffect(()=>{

    const productPromise= new Promise((resolve,reject) =>{
        setTimeout(()=>{
        resolve(productList)
        },2000)
    })
    productPromise.then(result=>setProduct(result))
    },[])
    return(
/*         <Container>
            
        </Container>  */
        <ItemDetail product={product}/>
    )
}