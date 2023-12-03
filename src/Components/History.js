
import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { searchWord } from '../redux/actions/searchAction'

const History = () => {
    const searchHist=useSelector(state=>state.historyReducer.searchHistory)
    console.log(searchHist)
    

  return (
    <div>
        <h1>Search History</h1>
        <ul>
        {searchHist.map((item,ind)=>(
            <li key={ind}>
                <Link to={`/${item}/`}>{item}</Link>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default History
