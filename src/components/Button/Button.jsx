import React from "react"
import "./Button.scss"

const Button = ({ onClick, text }) => (
  <button className="button" onClick={onClick}>
    {text}
  </button>
)

export default Button
