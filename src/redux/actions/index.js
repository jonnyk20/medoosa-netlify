import {
  SET_DETECTION_MODEL,
  SET_CLASSIFICATION_MODEL,
  ADD_FOUND_ANIMAL,
} from "./actionTypes"

export const setDetectionModelAction = model => ({
  type: SET_DETECTION_MODEL,
  payload: model,
})

export const setClassificationModelAction = model => ({
  type: SET_CLASSIFICATION_MODEL,
  payload: model,
})

export const addFoundAnimalAction = index => ({
  type: ADD_FOUND_ANIMAL,
  payload: index,
})
