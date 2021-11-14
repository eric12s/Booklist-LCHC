import React, { useState, useEffect } from 'react';
import { getBooks } from '../api/books';
import Card from '../utils/Card';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(books => {
      setBooks(books);
    });
  }, [])

  return (
    <div className="cards">
      {books.map((book) => (
        <Card title={book.name} key={book.key}>
          <p>
            {book.author}
            <br />
            {book.numOfPages}
          </p>
        </Card>
      ))}
    </div>
  );
}

export default Books;