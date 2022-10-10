import React from "react";
import { useContext, useEffect } from "react";
import { TrainingContext } from "../../../contexts/TrainingContext";
import { Card, Button } from 'react-bootstrap';

function ItemQuiz({name, id, answer, date}) {
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
            <Card.Title>{name}</Card.Title>
            <Card.Text> 
               Correct answer: {answer}
               -date{date} -- {id}
            </Card.Text>
            <Button onClick={handleDelete}>delete</Button>
          </Card.Body>
        </Card>
    )
    

}

export default ItemQuiz;