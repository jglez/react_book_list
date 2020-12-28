import React from 'react';
import { render } from 'react-dom';
import './index.css';

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
      <Image />
      <Title />
      <Author />
    </article>
  );
}

function Image() {
  return (
    <img src='https://images-na.ssl-images-amazon.com/images/I/410hiaPGyCL._SX348_BO1,204,203,200_.jpg' />
  );
}

function Title() {
  return (
    <h1>Cracking the Coding Interview</h1>
  )
}

function Author() {
  return (
    <h2>Gayle Mcdowell</h2>
  );
}

render(
  <BookList />,
  document.querySelector('#root')
);