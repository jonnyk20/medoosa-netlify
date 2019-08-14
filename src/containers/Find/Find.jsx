import React, { useEffect } from "react"
import FindComponent from "../../components/Find/Find"
import { useSelector } from "react-redux"
import { navigate } from "gatsby"

const FindContainer = () => {
  const models = useSelector(state => state.models)
  useEffect(() => {
    if (models.detectionModel === null || models.classifiactionModel === null) {
      navigate("/")
    }
  })

  return <FindComponent {...models} />
}

export default FindContainer
