import React, {Component} from 'react';
import { connect } from "react-redux";
import './Item.css';
import ItemCard from '../components/ItemCard'
import ItemForm from '../containers/ItemForm'


class Items extends Component { 

render(){
return (
	<div>
		<h3>Items:</h3>
		{this.props.items.map((item) => <ItemCard key={item.id} item={item} />
			)}
		<ItemForm />
	</div>
	)};
}


export default Items;

