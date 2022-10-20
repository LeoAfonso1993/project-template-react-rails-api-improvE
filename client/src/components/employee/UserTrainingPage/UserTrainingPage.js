import { useContext } from 'react';
import { TrainingContext } from "../../../contexts/TrainingContext";
import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { useState } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import CardsUserTraining from '../CardsUserTraining/CardsUserTraining';
import { useNavigate } from "react-router-dom";
import { Button } from 'semantic-ui-react'


function UserTrainingPage(){
    const navigate = useNavigate();

    const {displayT, score, setScore, trainingId} = useContext(TrainingContext);
    const {user} = useContext(UserContext)
    const [questionNumber, setQuestionNumber] = useState(0)
    document.title = "improvE | Training"
    
    const showItems = displayT.map((item) => {
        return(
            <Col>
                <CardsUserTraining 
                key={item.id}
                id={item.id}
                header={item.title? item.title : item.question}
                content={item}
                type={item.type}
                score={score}
                setScore={setScore}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                />
            </Col>
        )

    })


    function handleClick(e){
        e.preventDefault()
        // console.log(score) //number of right answers
        // console.log(questionNumber) //number of questions
        // console.log(user.id)
        // console.log(user.name)
        // console.log(trainingId)
        // console.log(scoreDefault)
        
        fetch("/newscore", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                user_name: user.name,
                number_of_questions: questionNumber,
                points: score,
                completed: true,
                training_id: trainingId,
                user_id: user.id
            })
        })
        .then((response) => response.json())
        .then((data) => {console.log(data)})
        .then(() => window.alert("Your training was completed succefully"))
        .then(() => navigate("/mytrainings"))
        .catch((err) => console.log(err))
    }


    return(
        <>
            <Container id="userTraining">
                <h1>Training</h1>
                <Row xs={1} sm={1} md={1} className="g-4">
                    {showItems}
                </Row>
            </Container>
            <br/>
            <Button style={{color: 'white', background: '#5E72EB' }} type="button" onClick={handleClick}>Complete Training</Button>
            <br/>
            <br/>       
        </>
    ) 
}

export default UserTrainingPage;