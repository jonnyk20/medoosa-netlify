import { SET_MOD, ADVANCE_STAGE } from "../actions/actionTypes"
import mods from "../../components/Mods"

const getRandomIndex = arr => Math.floor(Math.random() * arr.length)
const initialValues = mods.map(getRandomIndex)
console.log("initialValues", initialValues)

const initialState = {
  name: "Medoosa",
  stage: 0,
  modSelections: [
    {
      name: "color",
      value: initialValues[0],
    },
    {
      name: "eyes",
      value: initialValues[1],
    },
    {
      name: "mouth",
      value: initialValues[2],
    },
    {
      name: "arms",
      value: initialValues[3],
    },
    {
      name: "head",
      value: initialValues[4],
    },
  ],
}

const updateMod = (state, newSelection) => {
  const modSelections = state.modSelections.map((mod, i) =>
    i === newSelection.modIndex
      ? { ...mod, value: newSelection.itemIndex }
      : mod
  )
  return { ...state, modSelections }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MOD:
      return updateMod(state, action.payload)
    case ADVANCE_STAGE:
      return { ...state, stage: state.stage + 1 }
    default:
      return state
  }
}
