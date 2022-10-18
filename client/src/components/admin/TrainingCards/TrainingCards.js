import { useContext } from "react"
import React from "react";
import { Card } from 'react-bootstrap';
import { TrainingContext } from "../../../contexts/TrainingContext";
import { useNavigate } from 'react-router-dom'; 
import { Icon, Button } from 'semantic-ui-react'



function TrainingCards({name, categ, id}){

    const {counter, setCounter, setCardId, getTrainingQuizzes, cardId} = useContext(TrainingContext);
    const navigate = useNavigate();


    function handleDelete() {
        fetch(`/trainings/${id}`, {
            method: "DELETE",
        })
        .then(() => setCounter(counter + 1))
    }

    function handleClick() {
        setCardId(id)
        getTrainingQuizzes(cardId)
        navigate("/trainingpage")
    }

    return (
        <Card>
          
          <Card.Body>
            <Card.Title><strong>{name}</strong></Card.Title>
            <Card.Text>
              <h5>Training ID: {id}</h5>
            </Card.Text>
            <Button onClick={handleDelete} style={{color: 'white', background: '#FF9190' }}>&nbsp;&nbsp;&nbsp;<Icon name="trash alternate"/></Button>
            <Button onClick={handleClick} style={{color: 'white', background: '#5E72EB' }}>Open and Edit</Button>
          </Card.Body>
        </Card>
      );

}

export default TrainingCards;

