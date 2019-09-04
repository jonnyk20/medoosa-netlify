import React from "react"
import { useSelector, useDispatch } from "react-redux"
import PlayComponent from "../../components/Play/Play"
import formatFrames from "../../utils/formatFrames"
import video1Frames from "../../data/frames/video1"
import { addFoundAnimalAction, advanceStageAction } from "../../redux/actions"
import getFilteredTargetList from "../../data/getFilteredTargetList"
import { setTargetAction } from "../../redux/actions"
import { getRandomItem } from "../../utils"

const PlayContainer = () => {
  const { stage, modSelections, animals, target, foundAnimals } = useSelector(
    state => ({
      detectionModelLoaded: !!state.models.detectionModel,
      stage: state.medoosa.stage,
      modSelections: state.medoosa.modSelections,
      animals: state.animals,
      target: state.target,
      foundAnimals: state.foundAnimals,
    })
  )
  const dispatch = useDispatch()

  const frames = formatFrames(video1Frames)
  const targetAnimal = stage < 5 ? animals[target] : null

  const onHitTarget = hitTargetIndex => {
    if (stage >= 5) {
      return
    }
    switch (hitTargetIndex) {
      case -1:
        console.log("NOTHING")
        break
      case target:
        dispatch(addFoundAnimalAction(hitTargetIndex))

        const animalsToIgnore = [...Array.from(foundAnimals), hitTargetIndex]
        const availableAnimals = getFilteredTargetList(animalsToIgnore)
        const nextAnimal = getRandomItem(availableAnimals)
        dispatch(setTargetAction(nextAnimal))
        dispatch(advanceStageAction())
        break
      default:
        console.log("WRONG")
        break
    }
  }

  return (
    <PlayComponent
      stage={stage}
      modSelections={modSelections}
      frames={frames}
      targetAnimal={targetAnimal}
      onHitTarget={onHitTarget}
    />
  )
}

export default PlayContainer
