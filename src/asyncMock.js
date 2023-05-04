import {React, useEffect, useState} from 'react'

const PRODUCTS=[{"id":1,"category":"Notebook","title":"Notebook1","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." , "img": "https://rukminim1.flixcart.com/image/416/416/jrxtea80/laptop-skin-decal/s/d/t/mcbk-gw11996-printed-destiny-2-skin-top-gadgets-wrap-13-original-imafdkmmqkfvphjh.jpeg?q=70","price":1000,"stock":100},
{"id":2,"category":"Notebook","title":"Notebook2","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "img": "https://rukminim1.flixcart.com/image/416/416/jrxtea80/laptop-skin-decal/s/d/t/mcbk-gw11996-printed-destiny-2-skin-top-gadgets-wrap-13-original-imafdkmmqkfvphjh.jpeg?q=70","price":2000,"stock":500},
{"id":3,"category":"Notebook","title":"Notebook1","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." , "img": "https://rukminim1.flixcart.com/image/416/416/jrxtea80/laptop-skin-decal/s/d/t/mcbk-gw11996-printed-destiny-2-skin-top-gadgets-wrap-13-original-imafdkmmqkfvphjh.jpeg?q=70","price":1000,"stock":100},
{"id":4,"category":"Notebook","title":"Notebook2","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "img": "https://rukminim1.flixcart.com/image/416/416/jrxtea80/laptop-skin-decal/s/d/t/mcbk-gw11996-printed-destiny-2-skin-top-gadgets-wrap-13-original-imafdkmmqkfvphjh.jpeg?q=70","price":2000,"stock":500}

]

export const getProduct =()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(PRODUCTS))
    },300)
}

export const getProductById =(productId)=>{

    return new Promise((resolve)=>{
        setTimeout(()=>resolve(PRODUCTS.find(prod=>prod.id=== parseInt(productId))))
    },400)
}

export const getProductsByCategory =(categoryId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(PRODUCTS.filter(prod=>prod.category===categoryId))
        },500)
    })
}

const categories = ["Notebook", "Celular", "Tablet"]

const Container = ({ children }) => (
	<div style={{ width: 1170, margin: "30px auto" }}>{children}</div>
)

export const OptionList = () => {
	const { products, selectValue, changeSelect } = useList(PRODUCTS)

	return (
		<Container>
			<h1>Producto</h1>
			<select value={selectValue} onChange={changeSelect}>
				<option value="all">TODOS</option>
				{categories.map(category => (
					<option value={category}>{category}</option>
				))}
			</select>
			{!products?.length ? (
				<div>Loading...</div>
			) : (
				products.map(prod => (
					<div key={prod.id}>
						{(prod.title)} - {prod.category}
					</div>
				))
			)}
		</Container>
	)
}

export const useList = productList => {
	const [products, setProduct] = useState([])
	const [renderProducts, setRenderProducts] = useState([])
	const [selectValue, setSelectValue] = useState("")

	useEffect(() => {
		const productPromise = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(productList)
			}, 2000)
		})
		productPromise.then(result => {
			setProduct(result)
			setRenderProducts(result)
		})
	}, [productList])

	const changeSelect = event => {
		setSelectValue(event.target.value)
		if (event.target.value === "all") {
			setRenderProducts(products)
		} else {
			const newProductList = products.filter(
				products => products.category === event.target.value
			)
			setRenderProducts(newProductList)
		}
	}

	return { products: renderProducts, selectValue, changeSelect }
}

