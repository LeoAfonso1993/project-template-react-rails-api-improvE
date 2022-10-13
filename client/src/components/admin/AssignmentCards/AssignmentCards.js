import { useContext } from "react"
import React from "react";
import { Card, Button } from 'react-bootstrap';
import { TrainingContext } from "../../../contexts/TrainingContext";


function AssignmentCards({id, training, user}) {

    const {counter, setCounter} = useContext(TrainingContext)

    function handleDelete() {
        fetch(`/deleteassignment/${id}`, {
            method: "DELETE",
        })
        .then(() => setCounter(counter + 1))
    }
    

    return (
        <Card>
          <Card.Body>
            <Card.Title>{`Assignment ${id}`}</Card.Title>
            <Card.Text>
              {`Training: ${training} assingned to user: ${user}`}
            </Card.Text>
            <Button onClick={handleDelete}>delete</Button>
          </Card.Body>
        </Card>
    )
}
export default AssignmentCards;