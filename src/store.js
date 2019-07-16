import { createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunk from 'redux-thunk'




const itemsReducer = (state = [], action) => {
	switch(action.type) {
		case 'GET_ITEMS_SUCCESS':
		return action.items;

		default:
		return state;
	}
}


const reducers = combineReducers({
	items: itemsReducer
})
const middleware = [thunk];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducers, composeEnhancer(applyMiddleware(...middleware)))
