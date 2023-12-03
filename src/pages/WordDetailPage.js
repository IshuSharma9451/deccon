import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';
import WordDetail from '../Components/WordDetail';
import { searchWord } from '../redux/actions/searchAction';
import { useDispatch } from 'react-redux';
const WordDetailPage = () => {
    const { word } = useParams();
  const dispatch = useDispatch();
    useEffect(() => {
        // Dispatch the action to fetch word details when the component mounts
        dispatch(searchWord(word));
      }, [dispatch, word]);
  return (
    <div>
      <WordDetail/>
    </div>
  )
}

export default WordDetailPage
