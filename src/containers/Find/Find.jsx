import React, { useEffect } from "react"
import FindComponent from "../../components/Find/Find"
import { useSelector } from "react-redux"
import { navigate } from "gatsby"

const FindContainer = () => {
  const detectionModel = useSelector(state => state.models.detectionModel)
  useEffect(() => {
    if (detectionModel === null) {
      navigate("/")
    }
  })

  return <FindComponent detectionModel={detectionModel} />
}

export default FindContainer
