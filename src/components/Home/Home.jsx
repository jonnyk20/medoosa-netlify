import React from "react"
import { navigate } from "gatsby"
import "./Home.scss"

const Home = () => {
  return (
    <div className="container">
      <div className="grid">
        <div className="cell" />
        <div className="cell">
          <div className="circle" />
        </div>
        <div className="cell" />
        <div className="cell top-left">
          <div className="circle" />
        </div>
        <div className="cell" />
        <div className="cell top-right">
          <div className="circle" />
        </div>
        <div className="cell" />
        <div className="cell avatar">
          <div className="circle" />
        </div>
        <div className="cell" />
        <div className="cell bottom-left">
          <div className="circle" />
        </div>
        <div className="cell" />
        <div className="cell bottom-right">
          <div className="circle" />
        </div>
        <div className="cell" />
        <div className="cell" onClick={() => navigate("/find")}>
          <div className="circle">[o]</div>
        </div>
        <div className="cell" />
      </div>
    </div>
  )
}

export default Home
