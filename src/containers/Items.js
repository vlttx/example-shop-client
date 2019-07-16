import React from 'react';
import './Item.css';
import ItemCard from '../components/ItemCard'
const Items = (props) => (

	<div>
		<h3>Items:</h3>
		{props.items.map((item) => <ItemCard item={item} />
			



			)}
	</div>
	)


export default Items;

