import axios from 'axios';

const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY
const URL = 'https://pixabay.com/api'

export const getImages = (search, count) => {
    try {
        const data = axios.get(`${URL}/?key=${API_KEY}&q=${search}&image_type=photo&per_page=${count}&safesearch=true`)
        return data
    } catch (error) {
        console.log(error);
    }
}