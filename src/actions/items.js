
import {resetItemForm} from './itemForm'


const API_URL = process.env.REACT_APP_API_URL;

//action creators


const setItems = items => {
	return {
		type: 'GET_ITEMS_SUCCESS',
		items
	}
}

const addItem = item => {
	return {
		type: 'ADD_ITEM_SUCCESS',
		item
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

//another async as we are making a call to backend
export const createItem = item => {
	return dispatch => {
		return fetch(`${API_URL}`, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({item:item})
		})
		.then(response => response.json())
		.then(item => {
			dispatch(addItem(item))
			dispatch(resetItemForm())
		})
		.catch(error => console.log(error))
	}
}