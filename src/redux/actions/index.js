import { SET_DETECTION_MODEL } from "./actionTypes"

export const setDetectionModelAction = detectionModel => ({
  type: SET_DETECTION_MODEL,
  detectionModel,
})
