import React from 'react'

function Book(props) {
  return (
    <article className="book">
      <img src={props.img} alt="book cover" />
      <h1>{props.title}</h1>
      <h2>{props.author}</h2>
    </article>
  )
}

export default Book