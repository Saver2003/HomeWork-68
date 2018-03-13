import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://todo-list-847e1.firebaseio.com/'
});

export default instance;