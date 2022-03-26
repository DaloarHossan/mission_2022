import React from 'react';

const Product = (props) => {
	const {id,name,img}=props.product;
	return (
		<div>
			<h1>{name}</h1>
		</div>
	);
};

export default Product;