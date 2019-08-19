import React from "react"
import { Provider } from "react-redux"
import { createStore as reduxCreateStore, applyMiddleware } from "redux"

import logger from "redux-logger"
import rootReducer from "./reducers"

const createStore = () =>
  reduxCreateStore(
    rootReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(logger)
  )

export default ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
)