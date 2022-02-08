import React, {Component} from "react";
import './Quiz.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz.js";

class Quiz extends Component{
  state= {
    answerNumber:0,
    answerState:null,
    quiz:[{
      question:'какой сейчас день?',
      rightAnswer:2,
      id:1,
      answers:[{text:"Monday",id:1},{text:"Tuesday",id:2},{text:"Wednesday",id:3},{text:"Thursday",id:4}]
    },
    {
      question:'какая сейчас неделя?',
      rightAnswer:4,
      id:2,
      answers:[{text:"1",id:1},{text:"2",id:2},{text:"3",id:3},{text:"4",id:4}]
    }]
  }

  onAnswerClickHandler=(answerId)=>{
    const question = this.state.quiz[this.state.answerNumber]
    if(question.rightAnswer===answerId){

this.setState({
  answerState:{[answerId]:'success'}
})

      const timeout=window.setTimeout(()=>{
        if(this.isQuestionFinish()){
          console.log('finish')
        }
        else{ 
          this.setState({
          answerNumber:this.state.answerNumber+1,
          answerState:null
        })}
        window.clearTimeout(timeout)
      },500)
     
    }else{
      this.setState({
        answerState:{[answerId]:'error'}
      })
    }
   
  }

  isQuestionFinish(){
    return this.state.answerNumber+1===this.state.quiz.length
  }

  render (){
    return(
      <div className="quiz">
          <div className="quizWrapper">
          <h1>
          Quiz
        </h1>
            <ActiveQuiz
            answers={this.state.quiz[this.state.answerNumber].answers} 
             question={this.state.quiz[this.state.answerNumber].question}
             onAnswerClick={this.onAnswerClickHandler}
             quizLength = {this.state.quiz.length}
             answerNumber = {this.state.answerNumber+1}
             state = {this.state.answerState}
             />
            
          </div>
      </div>
    )

  }
}

export default Quiz