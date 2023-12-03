//Display.js
import React,{useEffect} from 'react'
import { useSelector,useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import { searchWord } from '../redux/actions/searchAction';

const Display = () => {
    const selectLoading = state => state.loading;
const selectData = state => state.searchReducer.data;
const selectError = state => state.error;


const loading = useSelector(selectLoading);
const data = useSelector(selectData);
const error = useSelector(selectError);
// const {loading,data,error}=useSelector(state=>state)
  console.log(data);
  return (
    <div className='display-div'>
      
      {data.length>0 &&
      data.map((item, idx) => (
        <div key={idx}>
            <h2>{item[0].word}</h2>
            <p>{item[0].phonetic}</p>
            {item[0].phonetics.map((phone,ind)=>(
              <div key={ind}>
                    <audio controls><source src={phone.audio} type="audio/mp3" /></audio>
                    <p>{phone.text}</p>
                </div>
            ))}
            {item[0].meanings.map((meaning,idx)=>(
                <div key={idx}>
                    <h3>{meaning.partOfSpeech}</h3>
                    {meaning.definitions.map((def,i)=><p key={i}>{def.definition}</p>)}
                </div>
                
            ))}
            
        </div>
        
      ))}
    </div>
  )
}

export default Display
