export default (state = {
	name: "",
	price: 0,
	img_url: "",
	description: ""
}, action) => {
	switch(action.type){
		case "UPDATED_DATA":
		return action.itemFormData

		default:
		return state;
	}
}