import React from "react";
import { useContext } from "react";
import { TrainingContext } from "../../../contexts/TrainingContext";
import { Card } from 'react-bootstrap';
import { Icon, Button } from 'semantic-ui-react'

function ItemText({name, id, answer}) {
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
            <Card.Title><strong>Title: {name}</strong></Card.Title>
            <Card.Text> 
               Description: {answer}
            </Card.Text>
            <Button style={{color: 'white', background: '#FF9190' }}  onClick={handleDelete}>&nbsp;&nbsp;&nbsp;<Icon name="trash alternate"/></Button>
          </Card.Body>
        </Card>
    )
    

}

export default ItemText;