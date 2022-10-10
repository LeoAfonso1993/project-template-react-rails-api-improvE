import React from "react";
import { useContext, useEffect } from "react";
import { TrainingContext } from "../../../contexts/TrainingContext";
import { Card, Button } from 'react-bootstrap';

function ItemPicture({name, id, answer, date}) {
  const {getTrainingPictures, cardId, pictureList} = useContext(TrainingContext);

  function handleDelete() {
    fetch(`picture_delete/${id}`, {
      method: "DELETE"
  })
  .then(() => getTrainingPictures(cardId))
  }


    return (
        <Card>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text> 
               -date{date} -- {id}
               {console.log(pictureList)}
               <img src={answer}></img>
            </Card.Text>
            <Button onClick={handleDelete}>delete</Button>
          </Card.Body>
        </Card>
    )
    

}

export default ItemPicture;