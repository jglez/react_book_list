import React from "react"
import { render } from "react-dom"
import "./index.css"

function BookList() {
  return (
    <section className="booklist">
      <Book author="J.K. Rowling" title="Harry Potter and the Sorcerer's Stone" img='https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg' />

      <Book author="J.K. Rowling" title="Harry Potter and the Chamber of Secrets" img='https://images-na.ssl-images-amazon.com/images/I/51jNORv6nQL._SX340_BO1,204,203,200_.jpg' />

      <Book author="J.K. Rowling" title="Harry Potter and the Prisoner of Azkaban" img='https://images-na.ssl-images-amazon.com/images/I/51-rbiAIiRL._SX341_BO1,204,203,200_.jpg' />

      <Book author="J.K. Rowling" title="Harry Potter and the Goblet of Fire" img='https://images-na.ssl-images-amazon.com/images/I/51sh8upPM+L.jpg' />

      <Book author="J.K. Rowling" title="Harry Potter and the Order of the Pheonix" img='https://images-na.ssl-images-amazon.com/images/I/51He83KD9SL.jpg' />

      <Book author="J.K. Rowling" title="Harry Potter and the Half-Blood Prince" img='https://images-na.ssl-images-amazon.com/images/I/51KV4CXARLL._SX342_BO1,204,203,200_.jpg' />

      <Book author="J.K. Rowling" title="Harry Potter and the Deathly Hallows" img='https://images-na.ssl-images-amazon.com/images/I/51jyI6lYi1L._SX342_BO1,204,203,200_.jpg' />
    </section>
  )
}

function Book(props) {
  return (
    <article className="book">
      <p>#1</p>
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