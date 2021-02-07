import React from 'react'
import bookData from '../data/bookData'
import Book from './Book'

function BookList() {
  return (
    <section className="booklist">

      {bookData.map(book => {
        return (
          <Book
            author={book.author}
            title={book.title}
            img={book.img}
          />
        )
      })}

    </section>
  )
}



export default BookList