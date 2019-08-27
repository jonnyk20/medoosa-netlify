import React, { useState } from "react"
import { MdDone } from "react-icons/md"
import Carousel from "../Carousel/Carousel"
import Button from "../Button/Button"
import Body from "../Body"

import "./Customize.scss"

// npm install react-icons --save

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

  return (
    <div className="customize">
      <div className="customize__avatar">
        <Body stage={stage} modSelections={modSelections} />
      </div>
      <div className="customize__selection">
        <Carousel items={items} afterChange={setSelectedItem} />
      </div>
      <div className="customize__confirmation">
        <Button onClick={handeClick}>
          <MdDone />
        </Button>
      </div>
    </div>
  )
}

export default Customize
