import React from 'react'
import { useContext} from 'react';
import { Form, Button } from 'semantic-ui-react'
import { TrainingContext} from '../../../contexts/TrainingContext';
import { UserContext } from '../../../contexts/UserContext';
import { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import AssignmentCards from '../AssignmentCards/AssignmentCards';
import { Header, Image, Table, Icon, Grid, Segment, Divider } from 'semantic-ui-react'

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
                    <Table.Row  key={training.name}>
                        <Table.Cell>
                            <Header as='h4' image>
                            <Icon name="bolt" />
                            <Header.Content>
                                {training.name}
                            <Header.Subheader></Header.Subheader>                                </Header.Content>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>{training.id}</Table.Cell>
                    </Table.Row>
                </>
            )
        }
    )

    const showUser = userList.map((u) => { 
        return(
            <>
                <Table.Row  key={u.name}>
                    <Table.Cell>
                        <Header as='h4' image>
                        <Icon name="user" />
                        <Header.Content>
                            {u.name}
                        <Header.Subheader></Header.Subheader>                                </Header.Content>
                        </Header>
                    </Table.Cell>
                    <Table.Cell>{u.id}</Table.Cell>
                </Table.Row>
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
            <Container>
                <h2>New Assignment</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group widths='equal'>
                        <select defaultValue="" onChange={handleChangeTraining}>
                        <option disabled={true} value="">Select Training</option>
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
            </Container>
            <br />
            <Container>
                <h2>All Assignments</h2>
                    <Grid stackable columns={2}>
                        <Grid.Row>
                            <Grid.Column>
                                <Segment>
                                    <Table>
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.HeaderCell width={8}>Training Name</Table.HeaderCell>
                                                <Table.HeaderCell width={2}>Training ID</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>
                                        <Table.Body>
                                            {showTraining}
                                        </Table.Body>
                                    </Table>
                                </Segment>
                            </Grid.Column>

                            <Grid.Column>
                                <Segment>
                                    <Table>
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.HeaderCell width={8}>User Name</Table.HeaderCell>
                                                <Table.HeaderCell width={2}>User ID</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>
                                        <Table.Body>
                                            {showUser}
                                        </Table.Body>
                                    </Table>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>


            </Container>
            <br />
            <Container>
                <h2>Training Cards</h2>
                <Row xs={1} sm={1} md={1} className="g-4">
                    {displayAssignments}
                </Row>
            </Container>
        </>
    )
}

export default Assignments;