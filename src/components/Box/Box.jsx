import React from "react"
import "./Box.scss"

const Box = ({ left, top, width, height, isTarget }) => {
  const className = `box box--${isTarget ? "correct" : "incorrect"}`
  console.log({ left, top, width, height, isTarget })
  return (
    <div
      className={className}
      style={{
        left,
        top,
        width,
        height,
      }}
    ></div>
  )
}

export default Box
