import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { navigate } from "gatsby"
import HomeComponent from "../../components/Home/Home"

const HomeContainer = () => {
  const { detectionModelLoaded, stage } = useSelector(state => ({
    detectionModelLoaded: !!state.models.detectionModel,
    stage: state.medoosa.stage,
  }))
  useEffect(() => {
    if (!detectionModelLoaded) {
      navigate("/")
    }
  })

  return <HomeComponent stage={stage} />
}

export default HomeContainer
