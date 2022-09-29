import { useContext } from "react"
import React from "react";
import { Card, Button } from 'react-bootstrap';
import { TrainingContext } from "../../../contexts/TrainingContext";



function TrainingCards({name, categ, id}){

    const {counter, setCounter} = useContext(TrainingContext);

    function handleDelete() {
        fetch(`/trainings/${id}`, {
            method: "DELETE",
        })
        .then(() => setCounter(counter + 1))
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
          </Card.Body>
        </Card>
      );

}

export default TrainingCards;

