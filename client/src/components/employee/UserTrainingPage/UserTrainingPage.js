import { useContext } from 'react';
import { TrainingContext } from "../../../contexts/TrainingContext";
import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { useState } from 'react';
import UserQuiz from '../UserQuiz/UserQuiz';
import UserText from '../UserText/UserText';
import CardsUserTraining from '../CardsUserTraining/CardsUserTraining';

function UserTrainingPage(){

    const {displayT, setDisplayT, score, setScore} = useContext(TrainingContext);

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
                />
            </Col>
        )

    })

    function handleClick(e){
        e.preventDefault()
        console.log(score)
    }

    
    return(
        <>
            <Container>
                <h1>Training</h1>
                <Row xs={1} sm={1} md={1} className="g-4">
                    {showItems}
                </Row>
            </Container>
            <button type="button" onClick={handleClick}>Complete Training</button>
        </>
    ) 
}

export default UserTrainingPage;