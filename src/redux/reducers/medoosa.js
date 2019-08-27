import { SET_MOD, ADVANCE_STAGE } from "../actions/actionTypes"

const initialState = {
  name: "Medoosa",
  stage: 1,
  modSelections: [
    {
      name: "color",
      value: 0,
    },
    {
      name: "eyes",
      value: 0,
    },
    {
      name: "mouth",
      value: 0,
    },
    {
      name: "arms",
      value: 0,
    },
    {
      name: "head",
      value: 0,
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
