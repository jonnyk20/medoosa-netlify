import React from "react"
import Egg from "./Egg/Egg"
import Planula from "./Planula/Planula"
import Polyp from "./Polyp/Polyp"
import Ephyra from "./Ephyra/Ephyra"
import Medusa from "./Medusa/Medusa"
import FinalForm from "./FinalForm/FinalForm"

const bodies = [Egg, Planula, Polyp, Ephyra, Medusa, FinalForm]

const BodyComponent = ({ stage = 0, modSelections }) => {
  const Body = bodies[stage]

  return <Body modSelections={modSelections} />
}

export default BodyComponent
