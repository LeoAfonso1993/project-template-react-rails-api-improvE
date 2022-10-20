import React from "react";
import { useContext } from "react";
import { TrainingContext } from "../../../contexts/TrainingContext";
import { Card } from 'react-bootstrap';
import { Icon, Button } from 'semantic-ui-react';

function ItemVideo({name, id, answer}) {

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
            <Card.Title><strong>Title: {name}</strong></Card.Title>
            <Card.Text> 
               Url: {answer}
            </Card.Text>
            <Button style={{color: 'white', background: '#FF9190' }} onClick={handleDelete}>&nbsp;&nbsp;&nbsp;<Icon name="trash alternate"/></Button>
          </Card.Body>
        </Card>
    )
    

}

export default ItemVideo;