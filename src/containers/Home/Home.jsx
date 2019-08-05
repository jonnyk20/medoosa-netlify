import React from "react"
import { useSelector } from "react-redux"
import { navigate } from "gatsby"
import HomeComponent from "../../components/Home/Home"

const HomeContainer = () => {
  const detectionModelLoaded = useSelector(
    state => !!state.models.detectionModel
  )
  if (!detectionModelLoaded) {
    navigate("/")
  }
  return <HomeComponent />
}

export default HomeContainer
