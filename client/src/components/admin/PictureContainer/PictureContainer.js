import React from "react";
import NewPicture from "../NewPicture/NewPicture";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TrainingContext } from "../../../contexts/TrainingContext";
import {
    Button,
    Form,
    Input,
    TextArea
  } from 'semantic-ui-react'

function PictureContainer() {

    const {cardId} = useContext(TrainingContext);
    const navigate = useNavigate();

    const defaultPicture = {
        title:"",
        description:"",
        url: "",
        training_id: cardId
    }

    const[pictureData, setPictureData] = useState(defaultPicture)

    function handleChange(e){

        const key = e.target.name
        setPictureData({
          ...pictureData,
          [key]:e.target.value
        })
    }


    function handleSubmit(e){
        e.preventDefault();
        fetch("/newpicture",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(pictureData)
        })
        .then((response) => response.json())
        .then((item) => console.log(item))
        .then(() => setPictureData(defaultPicture))
        e.target.reset()
        navigate("/newtraining")
    }




    return(
        <>
            <h3>New Picture</h3>
            <NewPicture setPictureData={setPictureData} pictureData={pictureData}/>
            <Form onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Field
                    name="title"
                    control={Input}
                    value={pictureData.title}
                    label='Title'
                    placeholder='Title'
                    onChange={handleChange}
                />

                <Form.Field
                    name="description"
                    control={TextArea}
                    label='Description'
                    value={pictureData.description}
                    onChange={handleChange}
                    placeholder='Your text here...'
                />

                </Form.Group>

                <Form.Field style={{color: 'white', background: '#5E72EB' }}  type="submit" control={Button}>Add Picture</Form.Field>
            </Form>
        
        </>
    )
}

export default PictureContainer;