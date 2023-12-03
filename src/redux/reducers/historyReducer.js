// historyReducer.js
import { ADD_TO_HISTORY } from "../actions/actionTypes";

const initialState={
    searchHistory:[],
}

const historyReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TO_HISTORY:return{...state,searchHistory:[...state.searchHistory,action.payload],}
        default:return state;
    }
}
export default historyReducer