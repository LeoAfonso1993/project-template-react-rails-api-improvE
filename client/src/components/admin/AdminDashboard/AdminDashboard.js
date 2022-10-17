import React from 'react'
import { useNavigate } from "react-router-dom";
import { TrainingContext} from '../../../contexts/TrainingContext';
import { UserContext } from '../../../contexts/UserContext';
import { useContext, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TrainingCards from "../TrainingCards/TrainingCards";
import { Grid, Segment } from 'semantic-ui-react'
import { Icon, List, Button, Container } from 'semantic-ui-react'
import { Divider } from 'semantic-ui-react'



function Dashboard(){
    const navigate = useNavigate();
    const {allTrainings, counter, setCounter, scoreList, setScoreList} = useContext(TrainingContext);
    const {userList, getAllUsers} = useContext(UserContext);


    const tCards = allTrainings.map((training) => {
        console.log(allTrainings)
        return(
            <Col>
                <TrainingCards 
                key={training.name}
                id={training.id}
                name={training.name}
                categ={training.category_id}
                />
            </Col>
        )
    })

    // allTrainings.forEach((element, index, array) => {
    //     console.log(element.name); // 100, 200, 300
    //     console.log(element.id); // 0, 1, 2
    //     console.log(element.category_id); // same myArray object 3 times
    // });

    console.log(userList)
    
    useEffect(() => {
        getAllUsers()
    }, [])

    const uCards = userList.map((u) => {
        return(
            <>
                <Divider />
                <List.Item>
                    <List.Icon name='user' size='large' verticalAlign='middle' />
                    <List.Content>
                        <List.Header as='a'>Name: {u.name}</List.Header>
                        <br/>
                        <List.Description as='a'>Email: {u.email}</List.Description>
                    </List.Content>
                </List.Item>
            </>
        )
    })

    const sCards = scoreList.map((s) => {
        return (
            <>
                <Divider />
                <List.Item>
                    <Icon name='list alternate' size='large' />
                    <List.Content>
                        <List.Header>Name: {s.user_name}</List.Header>
                        <List.Description>
                            Training: {s.training_id}, Score: {s.points}/{s.number_of_questions}
                        </List.Description>
                    </List.Content>
                </List.Item>
            </>
        )
    })

    
    function handleClick() {
        navigate("/newtraining")
    }
    function handleClickUsers(){
        navigate("/adminuserpage")
    }

    function handleClickAssignments(){
        setCounter(counter + 1)
        navigate("/assignments")
    }



    return (
        <>  
          <Container>
            <Grid stackable columns={3} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Segment><Button onClick={handleClick}>New Training</Button></Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment><Button onClick={handleClickUsers}>Manage Users</Button></Segment>
                    </Grid.Column>
                    <Grid.Column>
                    <Segment><Button onClick={handleClickAssignments}>Manage Assignments</Button></Segment>
                    </Grid.Column>   
                </Grid.Row>
            </Grid>
          </Container>

          <Container>  
            <Grid stackable columns={2}>
                <Grid.Row stretched>
                    <Grid.Column width={10} >
                        <Segment>
                            <Container>
                                <h3>Training Cards</h3>
                                <Row xs={1} sm={1} md={2} className="g-4">
                                    {tCards}
                                </Row>
                            </Container>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={6} >
                        <Segment>
                            <List.Item>
                                <h3>All Users</h3>
                                {uCards}
                            </List.Item>
                        </Segment>
                        <Segment>
                            <h3>Scores</h3>
                            {sCards}
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
          </Container>
        </>
    )
}

export default Dashboard;