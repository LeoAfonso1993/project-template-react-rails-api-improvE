import React from "react";
import { Card, Button } from 'react-bootstrap';
import { useContext } from "react";
import { TrainingContext } from "../../../contexts/TrainingContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function UserTrainingCards({id, name}){
  const navigate = useNavigate();

  const{displayMyTrainings, trainingId, setTrainingId} = useContext(TrainingContext)

  useEffect(() => {
    displayMyTrainings(id)
  },[])

  function handleClick(){
    displayMyTrainings(id)
    setTrainingId(id)
    navigate("/usertrainingpage")
  }

  return (
    <Card>
      <Card.Header as="h5"><i>{name}{id}</i></Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
        </Card.Text>
        <Button onClick={handleClick}>Start Training</Button>
      </Card.Body>
    </Card>
  );

}

export default UserTrainingCards;