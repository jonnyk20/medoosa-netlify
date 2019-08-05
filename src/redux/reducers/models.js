import { SET_DETECTION_MODEL } from "../actions/actionTypes"

const initialState = {
  detectionModel: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DETECTION_MODEL:
      return { detectionModel: action.detectionModel }
    default:
      return state
  }
}
