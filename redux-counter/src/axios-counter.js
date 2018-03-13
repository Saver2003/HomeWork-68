import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://counterlesson-68-lab.firebaseio.com/'
});

export default instance;