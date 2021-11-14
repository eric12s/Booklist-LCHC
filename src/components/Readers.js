import React, { useState, useEffect } from 'react';
import { getReaders } from '../api/readers';
import { getBooks } from '../api/books';
import Card from '../utils/Card';

const Readers = () => {
  const [readers, setReaders] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    Promise.all([getReaders(), getBooks()])
      .then(values => {
        setReaders(values[0]);
        setBooks(values[1]);
      })
  }, [])

  return (
    <div className="cards">
      {readers.map((reader) => (
        <Card title={reader.name} key={reader.key}>
          <ul>
            {books.map((book) => {
                if (reader?.alreadyReadBooks?.includes(book.id))
                  return <li key={book.id}>{book.name}</li>;
                return null;
              })}
          </ul>
        </Card>
      ))}
    </div>
  )
}

export default Readers;