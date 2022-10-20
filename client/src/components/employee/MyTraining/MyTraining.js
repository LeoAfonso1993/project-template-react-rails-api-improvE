import React from 'react'
import { useContext } from 'react';
import { UserContext} from '../../../contexts/UserContext'
import { Row, Col, Container } from 'react-bootstrap';
import UserTrainingCards from '../UserTrainingCards/UserTrainingCards';
import { Icon, Button } from 'semantic-ui-react'

function MyTraining() {
    const {user, trainingData, counter, setCounter} = useContext(UserContext);
    document.title = "improvE | My Training"


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
            <h1 style={{color: 'white'}}>My Trainings</h1>
            {welcome}
            <br/>
            <Button onClick={handleClick} style={{color: 'white', background: '#FF9190' }}>Load my Trainings</Button>
            <br/>
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