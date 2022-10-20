import React from "react";
import { useContext } from "react";
import { TrainingContext } from "../../../contexts/TrainingContext";
import { Card } from 'react-bootstrap';
import { Icon, Button } from 'semantic-ui-react'

function ItemQuiz({name, id, answer}) {
  const {getTrainingQuizzes, cardId} = useContext(TrainingContext);

    function handleDelete() {
      fetch(`quiz_delete/${id}`, {
        method: "DELETE"
    })
    .then(() => getTrainingQuizzes(cardId))
    }

    return (
        <Card>
          <Card.Body>
            <Card.Title><strong>Question: {name}</strong></Card.Title>
            <Card.Text> 
               Correct answer: {answer}
            </Card.Text>
            <Button style={{color: 'white', background: '#FF9190' }}  onClick={handleDelete}>&nbsp;&nbsp;&nbsp;<Icon name="trash alternate"/></Button>
          </Card.Body>
        </Card>
    )
    

}

export default ItemQuiz;