import { useState, useContext } from "react"
import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { TrainingContext } from "../../../contexts/TrainingContext";
import TrainingContainer from "../TrainingContainer/TrainingContainer";



function NewTrainingForm() {

    const {categList, counter, setCounter} = useContext(TrainingContext);

    const [catId, setCatID] = useState(1)
    const [newTraining, setNewTraining] = useState({
        name:""
    })

    const allCategOptions = categList.map((categ) => {
        return (
            <option key={categ.name} value={categ.id}>{categ.name}</option>
        )
    })

    function handleChange(e) {
        console.log(e.target.value)
        setNewTraining({
            name: e.target.value,
        })
    }

    function handleChangeCat(e){
        console.log(e.target.value)
        setCatID(e.target.value) 
    }
    
    function handleSubmit(e){
        e.preventDefault()

        const trainingData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: newTraining.name,
                category_id: catId
            })
        }

        fetch("/trainings", trainingData)
        .then((response) => response.json())
        .then((item) => console.log(item))
        .then(() => console.log(trainingData))
        .then(() => {
            setCounter(counter + 1)
            console.log(counter)
            setNewTraining({
                name: ""
            })
        })
        e.target.reset()

    }

    return (
        <>

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
            <Form.Label htmlFor="selectCategory">Select Category</Form.Label>
            <Form.Select id="questionTextInput"
            onChange={handleChangeCat}>
                {allCategOptions}
            </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label htmlFor="trainingName">Training Name</Form.Label>
            <Form.Control id="answerTextInput" 
                type="text" 
                name="name" 
                onChange={handleChange}/>
            </Form.Group>
            <Button type="submit" style={{ color: 'white' }}>Create</Button>
        </Form>

        <h3>All Tranings</h3>
        <TrainingContainer />
        </>
    )
    
}
export default NewTrainingForm;