import React from "react"
import FindComponent from "../../components/Find/Find"
import { useSelector } from "react-redux"

const FindContainer = () => {
  const detectionModel = useSelector(state => state.models.detectionModel)

  return <FindComponent detectionModel={detectionModel} />
}

export default FindContainer
