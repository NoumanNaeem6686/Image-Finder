import NavBar from './components/navBar';
// import './App.css';
import BreadCrum from './components/BreadCrum';
import Images from './components/Images';
import { useState , useEffect} from 'react';
import getImages from '../src/services/api.js'


function App() {
const [data,setData] = useState([])
  const [text, setText]= useState('');
  const [count,setCount]=useState(5);

  useEffect(()=>{
    if(count < 5 || count >150 || text.length < 4){
      return;
    }
    const getData = async()=>{
     let response = await getImages(text,count);
     setData(response.data.hits);
     


    }
    
    getData()

  },[text,count])
  return (
    <>
    <NavBar/>
    <BreadCrum setText={setText} setCount={setCount}/>
    <Images data={data}/>
    </>
  );
}

export default App;
