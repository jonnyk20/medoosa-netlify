import React from "react"
import "./BoundingBox.scss"

const BoundingBox = ({ box, startClassification }) => {
  const { x, y, w, h, index, isClassified } = box
  const style = {
    position: "absolute",
    left: x,
    top: y,
    height: h,
    width: w,
  }

  const handleClick = () => {
    if (!isClassified) {
      startClassification(index)
    }
  }

  return (
    <div className="bounding-box" style={style} onClick={handleClick}></div>
  )
}

export default BoundingBox
