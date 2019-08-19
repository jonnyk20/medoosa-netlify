import React, { Fragment } from "react"
import { navigate } from "gatsby"
import Egg from "../Bodies/Egg/Egg"

import "./Home.scss"

const Home = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="grid">
          <div className="cell cell--hero">
            <div className="circle">
              <Egg />
            </div>
          </div>
          <div className="cell">
            <div className="circle" />
          </div>
          <div className="cell" onClick={() => navigate("/find")}>
            <div className="circle">[o]</div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Home
