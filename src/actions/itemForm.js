// this.props.updateItemFormData(currentItemFormData)

// action creators


export const updateItemFormData = itemFormData => {
	return {
		type: "UPDATED_DATA",
		itemFormData
	}
}