import React, {Component} from 'react';
import { connect } from "react-redux";
import './Item.css';
import { getItems } from '../actions/items'
import ItemCard from '../components/ItemCard'
import ItemForm from '../containers/ItemForm'


class Items extends Component { 

	componentDidMount() {
		this.props.getItems()
		// this.props.dispatch({type: "GET_ITEMS_SUCCESS",
		// 	items: [ {name: "test", price: 1, img_url: "test", description: "fjsbjgb"}]
		// })
	}

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

const mapStateToProps = (state) => {
	return ({
		items: state.items
	})
}

export default connect(mapStateToProps, {getItems})(Items);

