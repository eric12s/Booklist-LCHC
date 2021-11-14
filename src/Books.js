import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Books = () => {
  const [books, setBooks] = useState([]);

  const getBooks = (setBooks) => {
    axios.get('https://my-json-server.typicode.com/eric12s/Booklist-LCHC/books')
      .then((books) => setBooks(books.data));
  }

  useEffect(() => {
    getBooks(setBooks);
  }, [])

  return (
    <div className="cards">
      {books.map((book) => (
        <div className="card" key={book.id}>
        <div className="container">
          <h4><b>{book.name}</b></h4>
          <p>
            {book.author}<br />
            {book.numOfPages}
          </p>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Books;