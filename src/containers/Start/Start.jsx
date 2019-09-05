import React, { useState, useEffect } from "react"
import StartComponent from "../../components/Start/Start"
import { useSelector, useDispatch } from "react-redux"
import { setModsAction, setTargetAction } from "../../redux/actions"
import getFilteredTargetList from "../../data/getFilteredTargetList"
import { getRandomItem } from "../../utils"
import mods from "../../components/Mods"

const getRandomIndex = arr => Math.floor(Math.random() * arr.length)
const initialValues = mods.map(getRandomIndex)

const Start = () => {
  const { stage, modSelections } = useSelector(state => ({
    stage: state.medoosa.stage,
    modSelections: state.medoosa.modSelections,
  }))

  const [isInitialized, setIsInitialized] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    const initialTarget = getRandomItem(getFilteredTargetList())
    const initialModsSelections = modSelections.map((selection, i) => ({
      ...selection,
      value: initialValues[i],
    }))
    setTargetAction(initialTarget)
    setModsAction(initialModsSelections)
    setIsInitialized(true)
  }, [])

  return isInitialized ? (
    <StartComponent stage={stage} modSelections={modSelections} />
  ) : null
}

export default Start
