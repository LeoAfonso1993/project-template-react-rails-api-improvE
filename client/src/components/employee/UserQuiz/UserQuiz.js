import React from "react";
import { Card, Button } from 'react-bootstrap';
import { UserContext } from "../../../contexts/UserContext";
import { Form, Checkbox } from 'semantic-ui-react'
import { useEffect, useState } from "react";

function UserQuiz({content, type, id, header, score, setScore, newArray, questionNumber, setQuestionNumber}) {

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
                <select onChange={handleChange}>
                    {allOptions}
                </select>
                <button type="button" onClick={handleClick}>Submit Answer</button>
            </form>
            }
       </>
    )      
    


}

export default UserQuiz;