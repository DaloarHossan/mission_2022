import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
	const [products,setProduct]=useState([]);
	useEffect(()=>
	fetch('product.json')
	.then(res=>res.json())
	.then(data=>setProduct(data))
	,[])
	return (
		<div className="container row">
			<div className='col-10'>
               {
				   products.map(product=> <Product product={product}></Product>)
			   }
			</div>
			<div className='col-2'>
               <h1>order</h1>
			</div>
		</div>
	);
};

export default Shop;