import React, {Component} from 'react'
import { connect } from 'react-redux'
import { updateItemFormData } from '..actions/itemFormData'




class ItemForm extends Component {

	handleOnChange = event => {
		const {name, value} = event.target
		const currentItemFormData = Object.assign({}, this.props.itemFormData, {
			[name]: value
		})
		this.props.updateItemFormData(currentItemFormData)
	}


	render() {
		const {name, price, img_url, description } = this.props.itemFormData
		return (
			<div>
			Add an Item to the Inventory:
			<form>
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
			</form>
			</div>


			)
	}


}

const mapStateToProps = state => {
	return {
		itemFormData: state.itemFormData
	}
}

export default connect(mapStateToProps)(ItemForm)