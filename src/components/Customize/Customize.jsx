import React, { useState } from "react"
import Carousel from "../Carousel/Carousel"
import Button from "../Button/Button"

const Customize = ({ items, onConfirm }) => {
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
    <div>
      <div>[Medoosa]</div>
      <Carousel items={selectionItems} afterChange={setSelectedItem} />
      <Button onClick={handeClick}>Click this button to die</Button>
    </div>
  )
}

export default Customize
