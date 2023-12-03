import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
const WordDetail = () => {

const selectData = state => state.searchReducer.data;
const selecteddata = useSelector(selectData);
const data=useSelector(state=>state.historyReducer.searchHistory)
console.log(data,'data')
console.log(selecteddata,'selectedData')
  return (
    <div>
      <h1>WordDetailPage</h1>
      <div className='display-div'>
      
      {selecteddata.length>0&&
      selecteddata.map((item, idx) => (
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
    </div>
  )
}

export default WordDetail
