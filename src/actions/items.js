const API_URL = process.env.REACT_APP_API_URL;

//action creators


const setItems = items => {
	return {
		type: 'GET_ITEMS_SUCCESS',
		items
	}
}
//Async actions

export const getItems = () => {
	return dispatch => {
		return fetch(`${API_URL}`)
		.then(response => response.json())
		.then(items => dispatch(setItems(items)))
		.catch(error => console.log(error))
	}
}
