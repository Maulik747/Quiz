import React, { useState } from "react";
import styles from "../Question/question.module.css";
import { useNavigate } from "react-router-dom";

const data= [
  {
    'title':'My Subtitle 1',
    'options':[
      'This is my example option 1','This is my example option 2', 'This is my example option 3'
    ]
  },
  {
    'title':'My Subtitle 2',
    'options':[
      'This is my next example option 1','This is my next example option 2', 'This is my next example option 3'
    ]
  }
]
const Question = () => {


  const questions=data;
  const [selectedQuestionIndex,setselectedQuestionIndex] =useState(0)
  const navigate = useNavigate()

  function onOptionSelect(optionIndex){
    if(selectedQuestionIndex+1<questions.length){
      setselectedQuestionIndex(selectedQuestionIndex+1)
    }else{
      navigate('/result')
    }
      
  }
  return (
    <div className={styles['question-page']}>
      <div className={styles['question-container']}>
        <div className={styles.intro}>
          <div className={styles.welcome}>
            <h1>Welcome to the Quiz</h1>
          </div>
        </div>
        <div className={styles.h_line}>
          <hr color="orange"></hr>
        </div>
        <div className={styles.instruction}>
          <h3>
            Please Select an Option to Move On
            <br />
          </h3>
        </div>
        <div className={styles["question-card"]}>
        <p style={{color:'grey', fontSize:'x-large'}}> Frage {selectedQuestionIndex+1} von {questions.length}</p>
        <QuestionComponent question={questions[selectedQuestionIndex]} onOptionSelect={onOptionSelect} ></QuestionComponent>
        </div>
      </div>
    </div>
  );
};

const QuestionComponent = (props) => {

  const{question,onOptionSelect}= props


  function  onCheck(optionIndex){
       setTimeout(() => {
        onOptionSelect(optionIndex)
      }, 200);
  }
  return (
    <div >
          <h4>{question.title}</h4>
          
          <div className={styles['options']}>
          <div style={{display:'flex',justifyContent:'space-around'}}>

          <div className={styles['option']}>
            <input key={'inp0'+question.title} onChange={()=>onCheck(0)} type="radio"></input>{question.options[0]}
            </div>
      
         <div className={styles['option']}>
         <input key={'inp1'+question.title} onChange={()=>onCheck(0)} type="radio" ></input>{question.options[1]}
           </div>
           </div>

            <div className={styles['option']}>
            <input key={'inp2'+question.title} onChange={()=>onCheck(0)} type="radio"></input>{question.options[2]}
</div>
          </div>

        </div>
  )
}




export default Question;
