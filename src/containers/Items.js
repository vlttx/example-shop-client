import React, {Component} from 'react';
import './Item.css';
import ItemCard from '../components/ItemCard'


class Items extends Component { 

render(){
return (
	<div>
		<h3>Items:</h3>
		{this.props.items.map((item) => <ItemCard key={item.id} item={item} />
			)}
	</div>
	)};
}


export default Items;

