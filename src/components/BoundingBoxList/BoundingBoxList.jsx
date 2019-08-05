import React from "react"
import BoundingBox from "../BoundingBox/BoundingBox"

const BoundingBoxList = ({ boxes }) =>
  boxes.map(box => <BoundingBox box={box} key={box.index} />)

export default BoundingBoxList
