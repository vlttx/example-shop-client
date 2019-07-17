import React, {Component} from 'react'
import { connect } from 'react-redux'
import { updateItemFormData } from '../actions/itemForm'
import { createItem } from '../actions/items'




class ItemForm extends Component {

	handleOnChange = event => {
		const {name, value} = event.target
		const currentItemFormData = Object.assign({}, this.props.itemFormData, {
			[name]: value
		})
		this.props.updateItemFormData(currentItemFormData)
	}

	handleOnSubmit = event =>{
		event.preventDefault()
		this.props.createItem(this.props.itemFormData)
	}
	render() {
		const {name, price, img_url, description } = this.props.itemFormData
		return (
			<React.Fragment>
			Add an Item to the Inventory:
			<form onSubmit={this.handleOnSubmit}>
					<div>
			<label htmlFor="name"> Name:</label>
			<input 
				type="text"
				onChange={this.handleOnChange}
				name="name"
				value={name}
				/>	
				</div>
				<div>
			<label htmlFor="price"> Price:</label>
			<input 
				type="number"
				onChange={this.handleOnChange}
				name="price"
				value={price}
				/>	
				</div>
				<div>		
			<label htmlFor="img_url"> Image URL:</label>
			<input 
				type="url"
				onChange={this.handleOnChange}
				name="image"
				value={img_url}
				/>	
				</div>
				<div>		
			<label htmlFor="description"> Description:</label>
			<input 
				type="text"
				onChange={this.handleOnChange}
				name="description"
				value={description}
				/>		
				</div>	
			<button type="submit"> Add Item </button>
			</form>
			</React.Fragment>
			)
}
}

const mapStateToProps = state => {
	return {
		itemFormData: state.itemFormData
	}
}

export default connect(mapStateToProps, {updateItemFormData, createItem})(ItemForm)