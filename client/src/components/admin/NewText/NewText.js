import { useContext, useState } from "react";
import { TrainingContext } from "../../../contexts/TrainingContext";
import {
    Button,
    Form,
    Input,
    TextArea
  } from 'semantic-ui-react'

function NewText(){
    const {cardId} = useContext(TrainingContext);

    const defaultText = {
        title:"",
        description:"",
        training_id: cardId
    }

    const[textData, setTextData] = useState(defaultText)

    function handleChange(e){
        const key = e.target.name
        setTextData({
          ...textData,
          [key]:e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch("/newtext",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(textData)
        })
        .then((response) => response.json())
        .then((item) => console.log(item))
        .then(() => setTextData(defaultText))
        e.target.reset()
    }
    
    return(
        <>
            <h3 style={{color: 'white'}}>New Text</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Field
                    name="title"
                    control={Input}
                    value={textData.title}
                    label='Title'
                    placeholder='Title'
                    onChange={handleChange}
                    />

                <Form.Field
                    name="description"
                    control={TextArea}
                    label='Description'
                    value={textData.description}
                    onChange={handleChange}
                    placeholder='Your text here...'
                />

                </Form.Group>


                <Form.Field style={{color: 'white', background: '#5E72EB' }}  type="submit" control={Button}>Create Text</Form.Field>
            </Form>
        </>
    )

}

export default NewText;