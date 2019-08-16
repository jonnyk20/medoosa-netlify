import React, { useEffect } from "react"
import FindComponent from "../../components/Find/Find"
import { useSelector, useDispatch } from "react-redux"
import { addFoundAnimalAction } from "../../redux/actions"
import { navigate } from "gatsby"

const FindContainer = () => {
  const { models, foundAnimals } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    if (models.detectionModel === null || models.classifiactionModel === null) {
      navigate("/")
    }
  })

  const onAnimalClassified = i => {
    console.log("O A C", i)
    if (!foundAnimals.has(i)) {
      dispatch(addFoundAnimalAction(i))
      navigate("/question", { state: { index: i } })
      return
    }
    console.log("ALREADY FOUND")
  }
  console.log("addFoundAnimalAction", addFoundAnimalAction)

  console.log("foundAnimals", foundAnimals)
  const props = {
    ...models,
    onAnimalClassified,
  }

  return <FindComponent {...props} />
}

export default FindContainer
