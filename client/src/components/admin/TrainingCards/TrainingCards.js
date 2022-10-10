import { useContext } from "react"
import React from "react";
import { Card, Button } from 'react-bootstrap';
import { TrainingContext } from "../../../contexts/TrainingContext";
import { useNavigate } from 'react-router-dom'; 



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
          <Card.Header as="h5"><i>{name}</i></Card.Header>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {categ} 
               -Id-{id}
            </Card.Text>
            <Button onClick={handleDelete}>delete</Button>
            <Button onClick={handleClick}>Open and Edit</Button>
          </Card.Body>
        </Card>
      );

}

export default TrainingCards;

