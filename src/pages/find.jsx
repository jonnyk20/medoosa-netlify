import React from "react"
import { useSelector } from "react-redux"
import { navigate } from "gatsby"

import "../index.scss"
import FindContainer from "../containers/Find/Find"

const FindPage = () => {
  const detectionModelLoaded = useSelector(
    state => !!state.models.detectionModel
  )
  if (!detectionModelLoaded) {
    navigate("/")
  }

  return <FindContainer />
}

export default FindPage
