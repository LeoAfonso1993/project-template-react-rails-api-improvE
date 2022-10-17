import React from "react";
import { useContext} from "react";
import { TrainingContext } from "../../../contexts/TrainingContext";
import { Card } from 'react-bootstrap';
import { Icon, Button  } from 'semantic-ui-react';

function ItemPicture({name, id, answer}) {
  const {getTrainingPictures, cardId} = useContext(TrainingContext);

  function handleDelete() {
    fetch(`picture_delete/${id}`, {
      method: "DELETE"
  })
  .then(() => getTrainingPictures(cardId))
  }


    return (
        <Card>
          <Card.Body>
            <Card.Title><strong>Title: {name}</strong></Card.Title>
            <Card.Text> 
               Picture ID: {id}
            </Card.Text>
            <img style={{ width: 400 }} alt="" src={answer}></img>
            <br />
            <br />
            <Button onClick={handleDelete}>&nbsp;&nbsp;&nbsp;<Icon name="trash alternate"/></Button>
          </Card.Body>
        </Card>
    )
    

}

export default ItemPicture;