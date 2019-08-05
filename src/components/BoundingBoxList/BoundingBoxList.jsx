import React from "react"
import BoundingBox from "../BoundingBox/BoundingBox"

const BoundingBoxList = ({ boxes }) =>
  boxes.map(box => <BoundingBox box={box} />)

export default BoundingBoxList
