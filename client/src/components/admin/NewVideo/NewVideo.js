import { useContext, useState } from "react";
import { TrainingContext } from "../../../contexts/TrainingContext";
import {
    Button,
    Form,
    Input,
    TextArea
  } from 'semantic-ui-react'

function NewVideo(){
    const {cardId} = useContext(TrainingContext);

    const defaultVideo = {
        title:"",
        description:"",
        url:"",
        training_id: cardId
    }

    const[videoData, setVideoData] = useState(defaultVideo)

    function handleChange(e){
        const key = e.target.name
        setVideoData({
          ...videoData,
          [key]:e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch("/newvideo",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(videoData)
        })
        .then((response) => response.json())
        .then((item) => console.log(item))
        .then(() => setVideoData(defaultVideo))
        e.target.reset()
    }

    return(
        <>
            <h3>New Text</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Field
                    name="title"
                    control={Input}
                    value={videoData.title}
                    label='Title'
                    placeholder='Title'
                    onChange={handleChange}
                />

                <Form.Field
                    name="description"
                    control={TextArea}
                    label='Description'
                    value={videoData.description}
                    onChange={handleChange}
                    placeholder='Your text here...'
                />

                <Form.Field
                    name="url"
                    control={Input}
                    value={videoData.url}
                    label='url'
                    placeholder='url'
                    onChange={handleChange}
                />
                </Form.Group>


                <Form.Field style={{color: 'white', background: '#5E72EB' }} type="submit" control={Button}>Create Video</Form.Field>
            </Form>
        </>
    )


}

export default NewVideo;