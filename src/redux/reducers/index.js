import { combineReducers } from "redux"
import models from "./models"
import animals from "./animals"
import foundAnimals from "./foundAnimals"
import medoosa from "./medoosa"
import points from "./points"

export default combineReducers({
  models,
  animals,
  foundAnimals,
  medoosa,
  points,
})
