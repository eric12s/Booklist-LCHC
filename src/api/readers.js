import axios from 'axios';

export const getReaders = () => {
  return axios.get('https://my-json-server.typicode.com/eric12s/Booklist-LCHC/readers')
    .then((books) => books.data);
}