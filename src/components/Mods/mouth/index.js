import React from "react"
import Mouth0 from "./mouth-0"
import Mouth1 from "./mouth-1"
import Mouth2 from "./mouth-2"
import Mouth3 from "./mouth-3"
import Mouth4 from "./mouth-4"

let mouth = [Mouth0, Mouth1, Mouth2, Mouth3, Mouth4]
mouth = mouth.map(MouthSVGComponent => () => (
  <div className="mouth">
    <MouthSVGComponent />
  </div>
))

export default mouth
