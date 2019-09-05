import React, { useState, useRef, useEffect } from "react"
import YouTube from "react-youtube"
import "./Play.scss"
import Box from "../Box/Box"
import Body from "../Body"
import { navigate } from "gatsby"
import Button from "../Button/Button"
import Spot from "../Spot/Spot"
import EvolutionGlow from "../EvolutionGlow/EvolutionGlow"
import SpottingConfirmation from "../SpottingConfirmation/SpottingConfirmation"
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
  const radius = 15
  const isWithinX = clientX + radius >= boxLeft && clientX - radius <= boxRight
  const iswithinY = clientY + radius >= boxTop && clientY - radius <= boxBottom
  const isWithinBounds = isWithinX && iswithinY
  return isWithinBounds
}

const introContent = (
  <div className="play__intro">
    <div className="text-box">
      <p className="brand-text">Help me find my friends.</p>
      <p>Start the video and then tap or click the fish to spot them.</p>
    </div>
  </div>
)

const Play = ({ frames, stage, modSelections, targetAnimal, onHitTarget }) => {
  const [video, setVideo] = useState(null)
  const [videoDimensions, setVideoDimensions] = useState({})
  const [boxesVisible, setBoxVisible] = useState(false)
  const [targetBoxes, setTargetBoxes] = useState([])
  const [spot, setSpot] = useState(null)
  const [isEvolving, setIsEvolving] = useState(false)
  const [playerState, setPlayerState] = useState(-1)
  const [isConfiriming, setIsConfirming] = useState(false)
  // -1 – unstarted
  // 0 – ended
  // 1 – playing
  // 2 – paused
  // 3 – buffering
  // 5 – video cued
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
      // autoplay: 1,
      loop: 1,
      playlist: videoId,
      enablejsapi: 1,
      origin: "https://medoosa.netlify.com/",
      playsinline: 1,
    },
  }

  const onReady = e => {
    const vid = e.target
    // vid.playVideo()
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

    let boxesToRender = []
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
        const isTarget = labelIndex === targetAnimal.id
        boxesToRender.push({
          left: boxX,
          top: boxY,
          height: boxH,
          width: boxW,
          key: `box-${i}`,
          labelIndex,
          score,
          isTarget,
        })
      }
    })
    let spotType = "miss"
    if (!!boxesToRender.length > 0) {
      spotType = "incorrect"
      const hitTarget = boxesToRender.some(({ isTarget }) => isTarget)
      if (hitTarget) {
        spotType = "correct"
        setIsConfirming(true)
        setTimeout(() => {
          if (!isEvolving) {
            onHitTarget(boxesToRender.labelIndex)
          }
          setIsConfirming(false)
        }, 1000)
        setIsEvolving(true)
        setTimeout(() => {
          setIsEvolving(false)
        }, 3000)
      }
      console.log("")
      setTargetBoxes(boxesToRender)
      setTimeout(() => {
        setTargetBoxes([])
      }, 100)
    }

    const spotProps = {
      left: clientX,
      top: clientY,
      type: spotType,
    }
    setSpot(spotProps)
    setTimeout(() => {
      setSpot(null)
    }, 500)
  }

  const onPlayerStateChange = e => {
    const state = e.data
    if (state !== -1) {
      setPlayerState(state)
    }
  }
  console.log("playerState", playerState)

  const targetContent = (
    <div className="play__target">
      {targetAnimal && (
        <div className="play__target-image">
          <img
            src={`https://jk-fish-test.s3.us-east-2.amazonaws.com/medoosa-stock/${targetAnimal.name.replace(
              " ",
              "-"
            )}.jpg`}
          />
          {isConfiriming && <SpottingConfirmation />}
        </div>
      )}
    </div>
  )

  const finishContent = (
    <div className="play__finish">
      <p class="brand-text">Well Done!</p>
      <Button onClick={() => navigate("/share")}>Finish</Button>
    </div>
  )

  const playContent =
    stage >= 5
      ? finishContent
      : targetAnimal && playerState !== -1
      ? targetContent
      : introContent

  return (
    <div onClick={handleClick} className="play">
      {spot && <Spot {...spot} />}
      <div
        className="play__video"
        style={{
          width: videoWidth,
          height: videoHeight,
        }}
        ref={videoRef}
      >
        {targetBoxes.length > 0 && targetBoxes.map(box => <Box {...box} />)}
        {videoWidth && (
          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={onReady}
            onStateChange={onPlayerStateChange}
          />
        )}
        {playerState !== -1 && (
          <div
            className="overlay"
            style={{ width: videoWidth, height: videoHeight }}
          />
        )}
      </div>
      <div className="play__avatar">
        <Body stage={stage} modSelections={modSelections} />
        {isEvolving && <EvolutionGlow />}
      </div>
      {playContent}
      {targetAnimal && playerState !== -1 && (
        <div className="play__instructions">
          Help me find the{" "}
          <span className="brand-text">{targetAnimal.name}</span>
        </div>
      )}
    </div>
  )
}

export default Play
