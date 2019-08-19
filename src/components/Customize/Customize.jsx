import React, { useState } from "react"
import Carousel from "../Carousel/Carousel"
import Button from "../Button/Button"

const Customize = ({ items, onConfirm }) => {
  const [selectedItem, setSelectedItem] = useState(0)
  const handeClick = () => onConfirm(selectedItem)
  return (
    <div>
      <div>[Medoosa]</div>
      <Carousel items={items} afterChange={setSelectedItem} />
      <Button onClick={handeClick}>Click this button to die</Button>
    </div>
  )
}

export default Customize
