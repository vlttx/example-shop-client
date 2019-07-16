import React from 'react'


const ItemCard = ({item}) => {

return <div key={item.id} className="ItemCard">
			<h4>{item.name}</h4>
			<img src={item.img_url} alt={item.name} width="200px" height="200px" />
			<p>Price: ${item.price}</p>
			<p>Description: {item.description}</p>
</div>}



export default ItemCard;