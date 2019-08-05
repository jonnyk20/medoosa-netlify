import React from "react"
import ProgressBar from "../ProgressBar/ProgressBar"
import Button from "../Button/Button"
import "./Start.scss"

const StartComponent = ({ setDetectionModel, downloadProgress }) => {
  return (
    <div className="start">
      <Button onClick={setDetectionModel} text="Start" />
      {downloadProgress > 0 && downloadProgress < 1 && (
        <ProgressBar progress={downloadProgress} />
      )}
    </div>
  )
}

export default StartComponent
