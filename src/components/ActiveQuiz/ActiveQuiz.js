import React from "react";
import './ActiveQuiz.css'
import AnswersList from "../AnswersList/AnswersList";

const ActiveQuiz = (props)=>{
  return(
<div className="activeQuiz">
    <p className="question">
      <span>
        <strong>{props.answerNumber}.</strong> &nbsp;
{props.question}    
    </span>
        <small>{props.answerNumber}/{props.quizLength}</small>
    </p>
  <AnswersList
  state={props.state}
  answers={props.answers}
  onAnswerClick={props.onAnswerClick}
  />
</div>)
}

export default ActiveQuiz