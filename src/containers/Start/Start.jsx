import React, { useState } from "react"
import StartComponent from "../../components/Start/Start"
import { useSelector, useDispatch } from "react-redux"
import { navigate } from "gatsby"
import { setDetectionModelAction } from "../../redux/actions"
import * as tf from "@tensorflow/tfjs"

const url =
  "https://jk-fish-test.s3.us-east-2.amazonaws.com/animal_mobilenet/model.json"

const StartContainer = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const [downloadProgress, setDownloadProgress] = useState(0)

  const setDetectionModel = detectionModel =>
    dispatch(setDetectionModelAction(detectionModel))

  const loadModel = async () => {
    try {
      const loadedModel = await tf.loadGraphModel(url, {
        onProgress: downloadProgress => {
          setDownloadProgress(downloadProgress)
        },
      })
      setDetectionModel(loadedModel)
      navigate("/home")
      // try {
      //   const warmupResult = await loadedModel.executeAsync(
      //     tf.zeros([1, 300, 300, 3])
      //   )
      //   console.log("RESUKT", warmupResult)
      // } catch (err) {
      //   console.log("ERROR ON TEST RUN", err)
      // }
    } catch (err) {
      console.log("ERROR ON LOAD", err)
    }
  }

  return (
    <StartComponent
      setDetectionModel={loadModel}
      downloadProgress={downloadProgress}
    />
  )
}

export default StartContainer
