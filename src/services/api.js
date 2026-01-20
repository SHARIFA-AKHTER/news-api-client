// import axios from 'axios';

// const API = axios.create({
//     baseURL: 'http://localhost:5000/api', 
// });

// export const fetchNews = () => API.get('/news');
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const fetchNews = (params) => API.get('/news', { params });