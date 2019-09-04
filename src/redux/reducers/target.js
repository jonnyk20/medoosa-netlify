import getFilteredTargetList from "../../data/getFilteredTargetList"
import { getRandomItem } from "../../utils"
import { SET_TARGET } from "../actions/actionTypes"

const intialState = getRandomItem(getFilteredTargetList())

export default (state = intialState, action) => {
  switch (action.type) {
    case SET_TARGET:
      return action.payload
    default:
      return state
  }
}
