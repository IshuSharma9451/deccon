// Home.js
import React, { useState } from 'react'
import { searchWord } from '../redux/actions/searchAction'
import { useSelector,useDispatch } from 'react-redux'
import { addToHistory } from '../redux/actions/historyAction'
const Home = () => {
    const [word,setWord]=useState('')
   
const selectData = state => state.data;



const data = useSelector(selectData);


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
