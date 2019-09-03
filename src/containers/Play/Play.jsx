import React from "react"
import { useSelector } from "react-redux"
import PlayComponent from "../../components/Play/Play"
import formatFrames from "../../utils/formatFrames"
import video1Frames from '../../data/frames/video1'

const PlayContainer = () => {
  const { stage, modSelections } = useSelector(state => ({
    detectionModelLoaded: !!state.models.detectionModel,
    stage: state.medoosa.stage,
    modSelections: state.medoosa.modSelections,
  }))

  const frames = formatFrames(video1Frames)

  return <PlayComponent stage={stage} modSelections={modSelections} frames={frames} />
}

export default PlayContainer
