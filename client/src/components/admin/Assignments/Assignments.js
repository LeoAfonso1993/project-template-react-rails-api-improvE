import React from 'react'
import { useContext} from 'react';
import { Form, Button } from 'semantic-ui-react'
import { TrainingContext} from '../../../contexts/TrainingContext';
import { UserContext } from '../../../contexts/UserContext';
import { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import AssignmentCards from '../AssignmentCards/AssignmentCards';

function Assignments(){
    const {allAssignments, counter, setCounter, allTrainings} = useContext(TrainingContext);
    const {userList} = useContext(UserContext);
    const aData = []

    const defaultUserTraining = {    
        training_id:"",
        user_id:""
      }

    const[userTrainingData, setUserTrainingData] = useState(defaultUserTraining)

    const displayTraining = allTrainings.map((training) => {
        aData.push(training.id)
        return <option key={training.id} value={training.id}>{training.name}</option>
    })

    const displayUser = userList.map((u) => {
        return <option key={u.id} value={u.id}>{u.name}</option>
    })


    function handleChangeTraining(e){
        setUserTrainingData({
            ...userTrainingData,
            training_id:e.target.value
        })
    }

    function handleChangeUser(e){
        setUserTrainingData({
            ...userTrainingData,
            user_id:e.target.value
        })
    }


    function handleSubmit(e){
        e.preventDefault();
        fetch("/usertraining", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userTrainingData)
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .then(() => setUserTrainingData(defaultUserTraining))
        .then(() => setCounter(counter + 1))
        e.target.reset()
    }

    const showTraining = allTrainings.map((training) => { 
            return(
                <>
                    <h3 key={training.name}>{training.id}-{training.name}</h3>
                </>
            )
        }
    )

    const showUser = userList.map((u) => { 
        return(
            <>
                <h3 key={u.name}>{u.id}-{u.name}</h3>
            </>
        )
    }
    )

    const displayAssignments = allAssignments.map((a) => {
        return(
            <Col>
                <AssignmentCards 
                key={a.id}
                id={a.id}
                training={a.training_id}
                user={a.user_id}
                />
            </Col>
        )
    })


    return(
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                    <select onChange={handleChangeTraining}>
                        {displayTraining}
                    </select>
                </Form.Group>
                
                <Form.Group widths='equal'>
                    <select onChange={handleChangeUser}>
                        {displayUser}
                    </select>
                </Form.Group>
                <Button type="submit" style={{ color: 'white' }}>Assing</Button>
            </Form> 
            {showTraining}
            {showUser}

            <h3>All Assignments</h3>

            <Container>
                <h1>Training Cards</h1>
                <Row xs={1} sm={1} md={1} className="g-4">
                    {displayAssignments}
                </Row>
            </Container>
        </>
    )
}

export default Assignments;