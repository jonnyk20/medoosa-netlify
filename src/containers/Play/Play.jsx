import React from "react"
import { useSelector } from "react-redux"
import PlayComponent from "../../components/Play/Play"

const PlayContainer = () => {
  const { stage, modSelections } = useSelector(state => ({
    detectionModelLoaded: !!state.models.detectionModel,
    stage: state.medoosa.stage,
    modSelections: state.medoosa.modSelections,
  }))

  return <PlayComponent stage={stage} modSelections={modSelections} />
}

export default PlayContainer
