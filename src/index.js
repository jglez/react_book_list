import React from "react"
import { render } from "react-dom"
import "./index.css"

const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg",
  title: "Harry Potter and the Sorcerer's Stone",
  author: "J.K. Rowling"
}

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51jNORv6nQL._SX340_BO1,204,203,200_.jpg",
  title: "Harry Potter and the Chamber of Secrets",
  author: "J.K. Rowling"
}

const thirdBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51-rbiAIiRL._SX341_BO1,204,203,200_.jpg",
  title: "Harry Potter and the Prisoner of Azkaban",
  author: "J.K. Rowling"
}

const fourthBook = {
  img: "https://embed.cdn.pais.scholastic.com/v1/channels/sso/products/identifiers/isbn/9780439139601/primary/renditions/700?useMissingImage=true",
  title: "Harry Potter and the Goblet of Fire",
  author: "J.K. Rowling"
}

const fifthBook = {
  img: "https://embed.cdn.pais.scholastic.com/v1/channels/tso/products/identifiers/isbn/9780439358064/primary/renditions/700?useMissingImage=true",
  title: "Harry Potter and the Order of the Pheonix",
  author: "J.K. Rowling"
}

const sixthBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51KV4CXARLL._SX342_BO1,204,203,200_.jpg",
  title: "Harry Potter and the Half-Blood Prince",
  author: "J.K. Rowling"
}

const seventhBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51jyI6lYi1L._SX342_BO1,204,203,200_.jpg",
  title: "Harry Potter and the Deathly Hallows",
  author: "J.K. Rowling"
}

function BookList() {
  return (
    <section className="booklist">
      <Book author={firstBook.author} title={firstBook.title} img={firstBook.img} />

      <Book author={secondBook.author} title={secondBook.title} img={secondBook.img} />

      <Book author={thirdBook.author} title={thirdBook.title} img={thirdBook.img} />

      <Book author={fourthBook.author} title={fourthBook.title} img={fourthBook.img} />

      <Book author={fifthBook.author} title={fifthBook.title} img={fifthBook.img} />

      <Book author={sixthBook.author} title={sixthBook.title} img={sixthBook.img} />

      <Book author={seventhBook.author} title={seventhBook.title} img={seventhBook.img} />
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