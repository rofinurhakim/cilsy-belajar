import { combineReducers, createStore, compose } from 'redux'
import todos from './todo/reducer'

const rooReducer = combineReducer({ todos })

const composeEnhancers= window.__REDUX_DECTOOLS_EXTENSION_COMPOSE_ || compose;
const mdl = composeEnhancers();
const store = createStore(rootReducer, mdl)

export { store }
