import React from 'react';
import './Item.css';
const Items = (props) => (

	<div>
		<h3>Items:</h3>
		{props.items.map(item => 
			<div className="ItemCard">
			<h4>{item.name}</h4>
			<img src={item.img_url} alt={item.name} width="200px" height="200px" />
			<p>Price: ${item.price}</p>
			<p>Description: {item.description}</p>
			</div>



			)}
	</div>
	)


export default Items;