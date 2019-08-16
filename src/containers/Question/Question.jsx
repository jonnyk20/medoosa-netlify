import React from "react"
import Question from "../../components/Qestion/Question"

const QuestionContainer = props => {
  console.log("INDEX", props.location.state.index)
  return <Question />
}

export default QuestionContainer
