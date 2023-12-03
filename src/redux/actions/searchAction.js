//searchAction.js
import { SEARCH_WORD_FAILURE,SEARCH_WORD_REQUEST,SEARCH_WORD_SUCCESS } from "./actionTypes";
import axios from 'axios'

export const searchWordReq=()=>{
    return{
        type:SEARCH_WORD_REQUEST
    }
}

export const searchWordSuccess=(data)=>{
    return{
        type:SEARCH_WORD_SUCCESS,
        payload:data
    }
}
export const searchWordFail=(error)=>{
    return{
        type:SEARCH_WORD_FAILURE,
        payload:error
    }
}


export const searchWord = (word) => {
  return async (dispatch) => {
    dispatch(searchWordReq());
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      dispatch(searchWordSuccess(response.data));
    } catch (err) {
      dispatch(searchWordFail(err.message));
    }
  };
};

