import React from "react";
import { Card } from 'react-bootstrap';
import { useContext } from "react";
import { TrainingContext } from "../../../contexts/TrainingContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from 'semantic-ui-react'

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
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button style={{color: 'white', background: '#5E72EB' }} onClick={handleClick}>Start Training</Button>
      </Card.Body>
    </Card>
  );

}

export default UserTrainingCards;