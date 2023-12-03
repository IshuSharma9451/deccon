// historyAction.js
import { ADD_TO_HISTORY } from "./actionTypes";

export const addToHistory=(word)=>{
    return{
        type:ADD_TO_HISTORY,
        payload:word
    }
}