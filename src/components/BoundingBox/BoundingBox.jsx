import React from "react"
import "./BoundingBox.scss"

const BoundingBox = props => {
  const { x, y, w, h } = props.box
  const style = {
    position: "absolute",
    left: x,
    top: y,
    height: h,
    width: w,
  }

  return <div className="bounding-box" style={style}></div>
}

export default BoundingBox
