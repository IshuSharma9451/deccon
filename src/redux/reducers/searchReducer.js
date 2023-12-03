// searchReducer.js
import { SEARCH_WORD_FAILURE,SEARCH_WORD_REQUEST,SEARCH_WORD_SUCCESS } from "../actions/actionTypes.js";

const  initialState={
    loading:false,
    data:[],
    error:''
}

const searchReducer=(state=initialState,action)=>{
    switch(action.type){
        case SEARCH_WORD_REQUEST:return{...state,loading:true}
        case SEARCH_WORD_SUCCESS:return{...state,data:[action.payload],error:'',loading:false}
        case SEARCH_WORD_FAILURE:return{...state,data:[],error:action.payload,loading:false}
        default:return state
    }
}
export default searchReducer;