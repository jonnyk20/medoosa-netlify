import { SET_INITIALIZED } from "../actions/actionTypes"

const intialState = false

export default (state = intialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return true
    default:
      return state
  }
}
