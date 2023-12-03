// Home.js
import React, { useEffect, useState } from 'react'
import { searchWord } from '../redux/actions/searchAction'
import { useSelector,useDispatch } from 'react-redux'
import { addToHistory } from '../redux/actions/historyAction'
const Home = () => {
    const [word,setWord]=useState('')
    const selectLoading = state => state.loading;
const selectData = state => state.data;
const selectError = state => state.error;


const loading = useSelector(selectLoading);
const data = useSelector(selectData);
const error = useSelector(selectError);

    const dispatch=useDispatch()

    function handleSearch(e){
        e.preventDefault();
        dispatch(searchWord(word)) 
        dispatch(addToHistory(word))       
    }
    console.log(data)
  return (
    <div className='main'>
      <form onSubmit={handleSearch}>
        <input className='input' value={word} onChange={(e)=>setWord(e.target.value)} type='text' placeholder='Enter something to search...'></input>
        <button className='btn' type='submit'>Search</button>
      </form>
    </div>
  )
}

export default Home
