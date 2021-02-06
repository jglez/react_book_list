import React from "react"
import { render } from "react-dom"
import "./index.css"
import bookData from './data/bookData'


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

function Book(props) {
  return (
    <article className="book">
      <img src={props.img} alt="book cover" />
      <h1>{props.title}</h1>
      <h2>{props.author}</h2>
    </article>
  )
}

render(
  <BookList />,
  document.querySelector("#root")
)