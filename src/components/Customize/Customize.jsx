import React, { useState } from "react"
import Carousel from "../Carousel/Carousel"
import Button from "../Button/Button"
import Body from "../Body"

import "./Customize.scss"

const Customize = ({
  items,
  onConfirm,
  modSelections,
  stage,
  isModalOpen,
  goHome,
}) => {
  const [selectedItem, setSelectedItem] = useState(0)
  const handeClick = () => onConfirm(selectedItem)

  const selectionItems = items.map((Item, i) => (
    <div key={`${i}-${i}`}>
      <div className="test">
        <Item />
      </div>
    </div>
  ))

  return (
    <div className="customize">
      <div className="customize__avatar">
        <Body stage={stage} modSelections={modSelections} />
      </div>
      <div className="customize__selection">
        <Carousel items={selectionItems} afterChange={setSelectedItem} />
      </div>
      <div className="customize__confirmation">
        <Button onClick={handeClick}>Conrifm Choice</Button>
      </div>
    </div>
  )
}

export default Customize
