import React from "react"
import "./Spot.scss"

const Spot = ({ top, left, type }) => {
  const className = `spot spot--${type}`

  return (
    <div className={className} style={{ top: top - 10, left: left - 10 }}></div>
  )
}

export default Spot
