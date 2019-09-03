import React  from 'react'
import './Box.scss'

const Box = ({ left, top, width, height }) => {

  return (
    <div className="box" style={{
      left,
      top,
      width,
      height,
    }}>
  
    </div>
  )
}


export default Box;
