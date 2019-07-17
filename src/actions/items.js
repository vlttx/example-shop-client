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

//another async as we are making a call to backend
export const createItem = item => {
	return dispatch => {
		return fetch(`${API_URL}`, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			data: JSON.stringify(item)
		})
		.then(response => response.json())
		.then(item => {
			debugger
		})
		.catch(error => console.log(error))
	}
}