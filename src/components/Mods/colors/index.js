import React from "react"

const colors = [
  "#FFFFFF",
  "#0000FF",
  "#FF0000",
  "#FFFF00",
  "#00FF00",
  "#6600FF",
  "#FF6600",
]

const addColor = color => () => {
  console.log("COLOR", color)
  return <div className="color" style={{ backgroundColor: color }}></div>
}

const colorComponents = colors.map(addColor)

export default colorComponents
