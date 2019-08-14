import { combineReducers } from "redux"
import models from "./models"
import animals from "./animals"
import foundAnimals from "./foundAnimals"
import medoosa from "./medoosa"

export default combineReducers({ models, animals, foundAnimals, medoosa })
