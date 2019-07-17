
	export default (state = [], action) => {
	switch(action.type) {
		case 'GET_ITEMS_SUCCESS':
		return action.items;

		default:
		return state;
	}
}