import React from "react";
import { useContext, useEffect } from "react";
import { TrainingContext } from "../../../contexts/TrainingContext";
import { Card, Button } from 'react-bootstrap';

function ItemText({name, id, answer, date}) {
  const {getTrainingTexts, cardId} = useContext(TrainingContext);

  function handleDelete() {
    fetch(`text_delete/${id}`, {
      method: "DELETE"
  })
  .then(() => getTrainingTexts(cardId))
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

export default ItemText;