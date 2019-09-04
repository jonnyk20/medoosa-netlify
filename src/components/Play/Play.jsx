import React, { useState, useRef, useEffect } from "react"
import YouTube from "react-youtube"
import "./Play.scss"
import Box from "../Box/Box"
import Body from "../Body"
import { getVideoDimensions } from "../../utils"

const videoId = "4a2cSvTph0M"

const labels = [
  "blue tang",
  "emperor angelfish",
  "flame angelfish",
  "green chromis",
  "lyretail anthias",
  "magnificent rabbitfish",
  "masked rabbitfish",
  "orangespine unicornfish",
  "tomini surgeonfish",
  "yellow tang",
]

const argMax = array =>
  [].map
    .call(array, (x, i) => [x, i])
    .reduce((r, a) => (a[0] > r[0] ? a : r))[1]

const getClassification = arr => {
  if (arr.length === 0) {
    return {
      label: "nothing",
      index: -1,
    }
  }

  const labelIndex = argMax(arr)
  const score = arr[labelIndex]

  return {
    labelIndex,
    score,
  }
}

const isBeingClicked = (bounds, box, clickTarget) => {
  const { top, left } = bounds
  const boxLeft = left + box.left
  const boxRight = boxLeft + box.width
  const boxTop = top + box.top
  const boxBottom = boxTop + box.height
  const { clientX, clientY } = clickTarget
  const isWithinX = clientX >= boxLeft && clientX <= boxRight
  const iswithinY = clientY >= boxTop && clientY <= boxBottom
  const isWithinBounds = isWithinX && iswithinY
  return isWithinBounds
}

const Play = ({ frames, stage, modSelections, targetAnimal, onHitTarget }) => {
  const [video, setVideo] = useState(null)
  const [videoDimensions, setVideoDimensions] = useState({})
  const [boxesVisible, setBoxVisible] = useState(false)
  const [targetBox, setTargetBox] = useState([])
  const videoRef = useRef()

  useEffect(() => {
    const dimensions = getVideoDimensions(window.innerWidth)
    setVideoDimensions(dimensions)
  }, [])

  const { width: videoWidth, height: videoHeight } = videoDimensions

  const opts = {
    height: videoHeight,
    width: videoWidth,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      loop: 1,
      playlist: videoId,
      enablejsapi: 1,
    },
  }

  const onReady = e => {
    const vid = e.target
    vid.playVideo()
    setVideo(vid)
  }

  const handleClick = e => {
    const { clientX, clientY } = e
    const time = video.getCurrentTime()
    const frames = Math.floor(time * 5)
    drawBoxes(frames + 1, { clientX, clientY })
  }

  const drawBoxes = (frameIndex, { clientX, clientY }) => {
    console.log("CLICK")
    const { current: canvas } = videoRef
    const OK = canvas.getBoundingClientRect()

    const frameObject = frames[frameIndex]
    const boxes = frameObject ? frameObject.formattedBoxes : []

    let boxToRender = null
    boxes.forEach((item, i) => {
      const topBox = item.coordinates
      const { labelIndex, score } = getClassification(item.classification)
      const topLeft = [topBox[1] * videoWidth, topBox[0] * videoHeight]
      const bottomRight = [topBox[3] * videoWidth, topBox[2] * videoHeight]
      const boxW = bottomRight[0] - topLeft[0]
      const boxH = bottomRight[1] - topLeft[1]
      const boxX = topLeft[0]
      const boxY = topLeft[1]
      const boxCoords = {
        left: boxX,
        top: boxY,
        height: boxH,
        width: boxW,
      }
      const shouldRender = isBeingClicked(OK, boxCoords, { clientX, clientY })

      if (shouldRender) {
        boxToRender = {
          left: boxX,
          top: boxY,
          height: boxH,
          width: boxW,
          key: `box-${i}`,
          labelIndex,
          score,
        }
      }
    })
    if (!!boxToRender) {
      const isTarget = boxToRender.labelIndex === targetAnimal.id
      if (isTarget) {
        onHitTarget(boxToRender.labelIndex)
      }
      const targetBox = { isTarget, ...boxToRender } // used to show green or red
      setTargetBox(targetBox)
      setBoxVisible(true)
      setTimeout(() => {
        setBoxVisible(false)
      }, 100)
    } else {
      console.log("RENDER MISS CIRCLE")
    }
  }

  return (
    <div onClick={handleClick} className="play">
      <div
        className="play__video"
        style={{
          width: videoWidth,
          height: videoHeight,
        }}
        ref={videoRef}
      >
        {boxesVisible && !!targetBox && <Box {...targetBox} />}
        {videoWidth && (
          <YouTube videoId={videoId} opts={opts} onReady={onReady} />
        )}
        <div
          className="overlay"
          style={{ width: videoWidth, height: videoHeight }}
        />
      </div>
      <div className="play__avatar">
        <Body stage={stage} modSelections={modSelections} />
      </div>
      <div className="play__target">
        {targetAnimal && (
          <img
            src={`https://jk-fish-test.s3.us-east-2.amazonaws.com/medoosa-stock/${targetAnimal.name.replace(
              " ",
              "-"
            )}.jpg`}
          />
        )}
      </div>
    </div>
  )
}

export default Play
