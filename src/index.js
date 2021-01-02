import React from 'react'
import { render } from 'react-dom'
import './index.css'

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

function Book() {
  return (
    <article className='book'>
      <p>#1</p>
      <img src='https://images-na.ssl-images-amazon.com/images/I/410hiaPGyCL._SX348_BO1,204,203,200_.jpg' />
      <h1>Cracking the Coding Interview</h1>
      <h2>Gayle Mcdowell</h2>
    </article>
  )
}

render(
  <BookList />,
  document.querySelector('#root')
)