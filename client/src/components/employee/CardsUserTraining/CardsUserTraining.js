import React from "react";
import { useContext } from "react"
import { Card, Button } from 'react-bootstrap';
import { TrainingContext } from "../../../contexts/TrainingContext";
import UserCards from "../../admin/UserCards/UserCards";
import UserQuiz from "../UserQuiz/UserQuiz";
import UserText from "../UserText/UserText"
import UserVideo from "../UserVideo/UserVideo";
import UserPicture from "../UserPicture/UserPicture";


function CardsUserTraining({id, header, content, type, score, setScore, questionNumber, setQuestionNumber}){

    const myArray = [content.correct_answer, content.option_2, content.option_3, content.option_4]
    var newArray = [];

    function sortArray(){
        for(let i=0; i<4; i++) {
            let index = Math.floor(Math.random()*myArray.length);
            newArray.push(myArray[index]);
            myArray.splice(index, 1);
        }
        console.log(newArray); 
    }

    sortArray()

 

    return (
        <>
            <Card>
                <Card.Header style={{background: "#FF9190"}} as="h5"><i>{type}</i></Card.Header>  
                <Card.Body>
                <Card.Text>
                <br/>
                    {type === "quiz" ? <UserQuiz id={id} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} header={header} newArray={newArray} content={content} type={type} setScore={setScore} score={score}/> : console.log("")}
                    {type === "text" ? <UserText id={id} header={header} newArray={newArray} content={content} type={type} /> : console.log("")}
                    {type === "video" ? <UserVideo id={id} header={header} content={content} type={type} /> : console.log("")}
                    {type === "picture" ? <UserPicture id={id} header={header} content={content} /> : console.log("")}
              
                </Card.Text>
                </Card.Body>
                </Card>
        </>
    )

}

export default CardsUserTraining;