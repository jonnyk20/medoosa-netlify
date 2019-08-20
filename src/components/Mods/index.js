import React from "react"

import eyes from "./eyes"

const testMods = []

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
  testMods.push(addFakeMods(name))
)

export default {
  eyes,
}
