import React from 'react';
import BookItem from './BookItem';
import BookAdd from './BookAdd';

function BookList() {
  const list = [
    { name: 'First book', author: 'Tash', id: 1 },
    { name: 'Second book', author: 'Israel', id: 2 },
  ];
  function displayBooks() {
    const results = list.map((value) => (
      <BookItem key={value.id} book={value} />
    ));
    return results;
  }
  return (
    <>
      <ul>
        {displayBooks()}
      </ul>
      <BookAdd />
    </>
  );
}

export default BookList;
