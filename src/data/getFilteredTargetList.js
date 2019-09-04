import animalsData from "./animal-data"

const ignoreListDefault = [6]

export default (ignoreList = []) =>
  animalsData
    .filter(({ id }) => ![...ignoreListDefault, ...ignoreList].includes(id))
    .map(({ id }) => id)
