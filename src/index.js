import React from "react"
import { render } from "react-dom"
import "./index.css"
import BookList from './components/BookList'

render(
  <BookList />,
  document.querySelector("#root")
)