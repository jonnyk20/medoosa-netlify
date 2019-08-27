import React from "react"
import Eyes0 from "./eyes-0"
import Eyes1 from "./eyes-1"
import Eyes2 from "./eyes-2"
import Eyes3 from "./eyes-3"
import Eyes4 from "./eyes-4"

let eyes = [Eyes0, Eyes1, Eyes2, Eyes3, Eyes4]
eyes = eyes.map(EyesSVGComponent => () => (
  <div className="eyes">
    <EyesSVGComponent />
  </div>
))

export default eyes
