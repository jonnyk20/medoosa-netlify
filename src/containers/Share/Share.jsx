import React from "react"
import ShareComponent from "../../components/Share/Share"
import { useSelector, useDispatch } from "react-redux"
import { resetAction } from "../../redux/actions"
import { navigate } from "gatsby"

const Share = () => {
  const { stage, modSelections, initialized } = useSelector(state => ({
    stage: state.medoosa.stage,
    modSelections: state.medoosa.modSelections,
    initialized: state.initialized,
  }))
  const dispatch = useDispatch()

  const reset = () => {
    dispatch(resetAction())
    navigate("/")
  }

  return (
    <ShareComponent stage={stage} modSelections={modSelections} reset={reset} />
  )
}

export default Share
