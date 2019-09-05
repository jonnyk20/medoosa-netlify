import React from "react"
import StartComponent from "../../components/Start/Start"
import { useSelector } from "react-redux"

const Start = () => {
  const { stage, modSelections } = useSelector(state => ({
    stage: state.medoosa.stage,
    modSelections: state.medoosa.modSelections,
  }))

  return <StartComponent stage={stage} modSelections={modSelections} />
}

export default Start
