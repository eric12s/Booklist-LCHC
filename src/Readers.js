import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Readers = () => {
  const [readers, setReaders] = useState([]);
  const [books, setBooks] = useState([]);
  
  const getBooks = () => {
    axios.get('https://my-json-server.typicode.com/eric12s/Booklist-LCHC/books')
      .then((books) => setBooks(books.data));
  }

  const getReaders = () => {
    axios.get('https://my-json-server.typicode.com/eric12s/Booklist-LCHC/readers')
      .then((books) => setReaders(books.data));
  }

  useEffect(() => {
    getReaders();
    getBooks();
  }, [])

  return (
    <div className="cards">
      {readers.map((reader) => (
        <div className="card" key={reader.id}>
        <div className="container">
          <h4><b>{reader.name}</b></h4>
          <ul>
            {books.map((book) => {
              if (reader?.alreadyReadBooks?.includes(book.id))
                return <li>{book.name}</li>;
              return null;
            })}
          </ul>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Readers;