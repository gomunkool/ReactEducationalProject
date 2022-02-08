import React from "react";
import './AnswersList.css'
import AnswerItem from "./AnswerItem/AnswerItem.js";

const AnswersList = props=>{
  return(
    <ul className="answerList">
{props.answers.map((answer,index)=>{
return(
  <AnswerItem
  state={props.state ? props.state[answer.id]: null}
  key = {index}
  answer={answer}
  onAnswerClick={props.onAnswerClick}
  />

)
})}


    </ul>
)
}

export default AnswersList