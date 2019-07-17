
const initialState = {
	name: "",
	price: 0,
	img_url: "",
	description: ""
}

export default (state = initialState, action) => {
	switch(action.type){
		case "UPDATED_DATA":
		return action.itemFormData;

		case "RESET_ITEM_FORM":
		return initialState;

		default:
		return state;
	}
}