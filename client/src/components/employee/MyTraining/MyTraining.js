import React from 'react'
import { useContext, useState, useEffect } from 'react';
import { UserContext} from '../../../contexts/UserContext'
import { Row, Col, Container } from 'react-bootstrap';
import UserTrainingCards from '../UserTrainingCards/UserTrainingCards';

function MyTraining() {
    const {user, trainingData, setTrainingData, counter, setCounter} = useContext(UserContext);


    const welcome = user == null ? `User disconected`:`Welcome ${user.name}`
    const userId = user == null ? `User disconected` : `${user.id}`


    const displayTrainings = trainingData.map((i) => {
        console.log(i)
        return(
            <Col>
                <UserTrainingCards 
                key={i.id}
                id={i.id}
                name={i.name}
                />
            </Col>
        )
    })
    

    function handleClick(){
        console.log(trainingData)
        setCounter(counter + 1)
    }


    return(
        <>
            <h1>My Trainings</h1>
            {welcome}
            <br/>
            <button onClick={handleClick}>Load my Trainings</button>
            <br/>
            <Container>
                <Row xs={1} sm={2} md={3} className="g-4">
                    {displayTrainings}
                </Row>
            </Container>
            
        </>
    )
    
}

export default MyTraining;