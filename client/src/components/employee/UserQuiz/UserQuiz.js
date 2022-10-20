import React from "react";
import { useState } from "react";
import { Button } from 'semantic-ui-react'

function UserQuiz({content, header, score, setScore, newArray, questionNumber, setQuestionNumber}) {

    const [answerSubmit, setAnswerSubmit] = useState(false)
    const [answerData, setAnswerData] = useState("")
    
    const allOptions = newArray.map((item) => {
        return (
            <option key={item} value={item}>{item}</option>
        )
    })


    function handleChange(e){
        console.log(e.target.value)
        setAnswerData(e.target.value)
    }

    function handleClick(e){
        e.preventDefault()
        if(answerData === content.correct_answer){
            setScore(score + 1)
        }
        setQuestionNumber(questionNumber +1)
        setAnswerSubmit(true)
    }


    return(
        <>  
            {answerSubmit ? "Answer submitted" : 
            <form>
                <h4>{header}</h4>
                <select style={{width: "80%"}} onChange={handleChange}>
                    {allOptions}
                </select>
                <br/>
                <br/>
                <Button style={{color: 'white', background: '#5E72EB' }} type="button" onClick={handleClick}>Submit Answer</Button>
            </form>
            }
       </>
    )      
    


}

export default UserQuiz;