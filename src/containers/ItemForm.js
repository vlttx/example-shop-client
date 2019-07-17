import React, {Component} from 'react'
import { connect } from 'react-redux'




class ItemForm extends Component {
	render() {
		return (
			<div>
			Add an Item to the Inventory:

			<form>
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