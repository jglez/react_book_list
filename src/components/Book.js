import React from 'react'

function Book(props) {
  const { img, title, author } = props

  return (
    <article className='book'>
      <img src={img} alt='book cover' />
      <h1>{title}</h1>
      <h2>{author}</h2>
    </article>
  )
}

export default Book