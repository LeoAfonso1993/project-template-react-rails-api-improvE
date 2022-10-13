import React from "react";
import { useContext } from "react";
import { TrainingContext } from "../../../contexts/TrainingContext";
import { Card, Button } from 'react-bootstrap';

function ItemVideo({name, id, answer, date}) {

    const {getTrainingVideos, cardId} = useContext(TrainingContext);

    function handleDelete() {
      fetch(`video_delete/${id}`, {
        method: "DELETE"
    })
    .then(() => getTrainingVideos(cardId))
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

export default ItemVideo;