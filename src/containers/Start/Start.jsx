import React, { useState, useEffect } from "react"
import StartComponent from "../../components/Start/Start"
import { useSelector, useDispatch } from "react-redux"
import { setModsAction, setTargetAction } from "../../redux/actions"
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"
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
    dispatch(setTargetAction(initialTarget))
    dispatch(setModsAction(initialModsSelections))
    setIsInitialized(true)
  }, [])

  return isInitialized ? (
    <StartComponent stage={stage} modSelections={modSelections} />
  ) : (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 100 }}>
      <LoadingSpinner />
    </div>
  )
}

export default Start
