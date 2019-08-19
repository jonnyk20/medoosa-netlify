import React from "react"

const mods = []

const addFakeMods = modName => {
  const arr = []
  for (let i = 0; i < 20; i++) {
    arr.push(
      <div key={`${modName}-${i}`}>
        <div className="test">{`${modName}-${i}`}</div>
      </div>
    )
  }
  return arr
}

;["color", "eyes", "mouth", "arms", "hat"].forEach(name =>
  mods.push(addFakeMods(name))
)

export default mods
