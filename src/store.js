import { createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunk from 'redux-thunk'
import itemsReducer from './reducers/items'







const reducers = combineReducers({
	items: itemsReducer
})
const middleware = [thunk];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducers, composeEnhancer(applyMiddleware(...middleware)))
