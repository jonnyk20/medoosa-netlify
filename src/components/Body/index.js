import React from "react"
import Egg from "./Egg/Egg"

const bodies = [Egg]

const BodyComponent = ({ stage = 0 }) => {
  const Body = bodies[stage]

  return <Body />
}

export default BodyComponent
