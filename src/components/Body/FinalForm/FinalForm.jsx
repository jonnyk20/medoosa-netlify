import React from "react"
import { eyes, mouth, arms, head } from "../../Mods"

import "./FinalForm.scss"

const FinalForm = ({ modSelections }) => {
  const Eyes = eyes[modSelections[1].value]
  const Mouth = mouth[modSelections[2].value]
  const Arms = arms[modSelections[3].value]
  const Head = head[modSelections[4].value]

  return (
    <div className="final-form">
      <div className="final-form__arms">
        <Arms />
      </div>
      <div className="final-form__eyes">
        <Eyes />
      </div>
      <div className="final-form__mouth">
        <Mouth />
      </div>
      <div className="final-form__head">
        <Head />
      </div>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
      >
        <title>Artboard 16</title>
        <path
          d="M284.34,645c-14.48,0-25.28-11.08-28.47-22a25.93,25.93,0,0,1-.64-10.25c.63-3.72,14.24-84.22,21.42-169.84a207.12,207.12,0,0,1,64.09-133.81A196.81,196.81,0,0,1,476.08,255h42.65a199.19,199.19,0,0,1,137,54.74,209.87,209.87,0,0,1,64.92,135.44c7.09,83.8,23.2,164.45,24.14,169.12a25.76,25.76,0,0,1-.65,10.18C740.61,636.56,728.91,645,715.66,645Z"
          style={{ fill: "currentcolor" }}
        />
        <path d="M518.73,260a194.23,194.23,0,0,1,133.56,53.38A204.92,204.92,0,0,1,715.66,445.6c7,83,22.85,162.88,24.18,169.48a20.84,20.84,0,0,1-.51,8C736.43,633,726.7,640,715.66,640H284.34c-11.89,0-21.07-9.49-23.67-18.41a20.85,20.85,0,0,1-.49-8.15c.89-5.24,14.33-85.18,21.45-170.13a202.15,202.15,0,0,1,62.54-130.59A191.78,191.78,0,0,1,476.08,260h42.65m0-10H476.08c-106.63,0-195.29,83.69-204.41,192.47C264.28,530.5,250.28,612,250.28,612a30.9,30.9,0,0,0,.79,12.37c4,13.87,17.45,25.62,33.27,25.62H715.66c15.82,0,29.23-10.26,33.27-24.12a30.91,30.91,0,0,0,.79-12.37S733,531.37,725.62,444.76C716.31,334.67,626.64,250,518.73,250Z" />
      </svg>
    </div>
  )
}

export default FinalForm
