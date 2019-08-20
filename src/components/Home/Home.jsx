import React, { Fragment } from "react"
import { navigate } from "gatsby"
import Body from "../Body"

import "./Home.scss"

const Home = ({ stage }) => (
  <Fragment>
    <div className="container">
      <div className="grid">
        <div className="cell cell--avatar">
          <Body stage={stage} />
        </div>
        <div className="cell cell--progress">Progress [...]</div>
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

export default Home
