import  axios from 'axios'
const API_KEY = '36554720-78f70a18725619b80eaaa353d';
const API_URL = 'https://pixabay.com/api';

const getImages = async(text, count)=>{
    try{
        return await axios.get(`${API_URL}/?key=${API_KEY}&q=${text}$image_type=photo&per_page=${count}&safesearch=true`);
    }
    // https://pixabay.com/api/?key=36554720-78f70a18725619b80eaaa353d&q=yellow+flowers&image_type=photo
    catch(error){
     console.log('getting error while calling api', error.message)

    }
}
export default getImages;