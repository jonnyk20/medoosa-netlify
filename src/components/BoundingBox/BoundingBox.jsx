import React from "react"
import "./BoundingBox.scss"

const BoundingBox = props => {
  console.log("PROPS", props)
  const { x, y, w, h } = props.box
  const style = {
    position: "absolute",
    left: x,
    top: y,
    height: h,
    width: w,
  }
  console.log("STYLE", style)

  return (
    <div className="bounding-box" style={style}>
      box
    </div>
  )
}

export default BoundingBox
