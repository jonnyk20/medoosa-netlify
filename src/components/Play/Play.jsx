import React, { useState, useRef } from 'react';
import YouTube from 'react-youtube';
import './Play.scss';
import Box from '../Box/Box';

const labels = [
  'blue tang',
  'emperor angelfish',
  'flame angelfish',
  'green chromis',
  'lyretail anthias',
  'magnificent rabbitfish',
  'masked rabbitfish',
  'orangespine unicornfish',
  'tomini surgeonfish',
  'yellow tang'
]

const argMax = (array) =>  [].map.call(array, (x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];

const getClassification = arr => arr.length === 0 ? 'nothing' : labels[argMax(arr)]

const imgHeight = 315
const imgWidth = 560

const isBeingClicked = (bounds, box, clickTarget) => {
  const {  top, left } = bounds;
  const boxLeft = left + box.left;
  const boxRight = boxLeft + box.width
  const boxTop = top + box.top;
  const boxBottom = boxTop + box.height;
  const { clientX, clientY } = clickTarget;
  const isWithinX = clientX >= boxLeft && clientX <= boxRight;
  const iswithinY = clientY >= boxTop && clientY <= boxBottom
  const isWithinBounds = isWithinX && iswithinY
  return isWithinBounds;
}


const Play = ({ frames }) => {

  const opts = {
    height: '315',
    width: '560',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      loop: 1,
      playlist: "bIs1qzUbaR8",
      enablejsapi: 1
    }
  };

  const [video, setVideo] = useState(null)
  const [boxesVisible, setBoxVisible] = useState(false)
  const [targetBox, setTargetBox] = useState([])
  const videoRef = useRef()

  const onReady = (e) => {
    const vid = e.target;
    vid.playVideo()
    setVideo(vid)
  }

  const handleClick = e => {
    const { clientX, clientY } = e;
    const time = video.getCurrentTime();
    const frames = Math.floor(time * 5)
    drawBoxes(frames + 1, { clientX, clientY })
  }

  const drawBoxes = (frameIndex, { clientX, clientY }) => {
    const { current: canvas } = videoRef;
    const OK = canvas.getBoundingClientRect();

    const frameObject = frames[frameIndex]
    const boxes = frameObject ? frameObject.formattedBoxes : []

    let boxToRender = null
    boxes.forEach((item, i) => {
      const topBox = item.coordinates
      const classification =  getClassification(item.classification);
      const topLeft = [topBox[1] * imgWidth, topBox[0] * imgHeight]
      const bottomRight = [topBox[3] * imgWidth, topBox[2] * imgHeight]
      const boxW = bottomRight[0] - topLeft[0]
      const boxH = bottomRight[1] - topLeft[1]
      const boxX = topLeft[0]
      const boxY = topLeft[1]
      const boxCoords = {
        left: boxX,
        top: boxY,
        height: boxH,
        width: boxW,
      };
      const shouldRender = isBeingClicked(OK, boxCoords, { clientX, clientY })
      if (shouldRender) {
        console.log('classification', classification)
        boxToRender = {
          left: boxX,
          top: boxY,
          height: boxH,
          width: boxW,
          key: `box-${i}`,
        }
      }
    })
    setTargetBox(boxToRender)
    setBoxVisible(true)
    setTimeout(() => {
      setBoxVisible(false)
    }, 100);
  }

  return (
    <div onClick={handleClick} className="app-container">
      <div className="video-container" style={{
        width: imgWidth,
        height: imgHeight
      }} ref={videoRef}>
        {boxesVisible && !!targetBox && <Box {...targetBox} />}
        <YouTube
          videoId="bIs1qzUbaR8"
          opts={opts}
          onReady={onReady}
        />
        {

        }
        <div className="overlay" style={{ width: 560, height: 315 }} />
      </div>
    </div>
  );
}

export default Play;