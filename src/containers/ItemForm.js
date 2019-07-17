import React, {Component} from 'react'
import { connect } from 'react-redux'




class ItemForm extends Component {
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
				name="name"
				value={name}
				/>
				</div>
				<div>
			<label htmlFor="price"> Price:</label>
			<input 
				type="text"
				name="price"
				value={price}
				/>
				</div>
				<div>
			<label htmlFor="img_url"> Image URL:</label>
			<input 
				type="text"
				name="image"
				value={img_url}
				/>
				</div>
				<div>
			<label htmlFor="description"> Description:</label>
			<input 
				type="text"
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