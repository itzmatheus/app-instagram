import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-instagram-rocketseat.herokuapp.com'
});

export default api