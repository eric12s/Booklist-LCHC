import axios from 'axios';

export const getBooks = () => {
  return axios.get('https://my-json-server.typicode.com/eric12s/Booklist-LCHC/books')
    .then((books) => books.data);
}