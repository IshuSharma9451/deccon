import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import searchReducer from './reducers/searchReducer.js';
import historyReducer from "./reducers/historyReducer.js";

const rootReducer = combineReducers(
    {
    searchReducer: searchReducer,
    historyReducer: historyReducer
}
)


const store = createStore(rootReducer,applyMiddleware(thunk))

export default store