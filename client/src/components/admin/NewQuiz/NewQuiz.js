import { useContext, useState } from "react";
import { TrainingContext } from "../../../contexts/TrainingContext";
import React, { Component } from 'react'
import {
  Button,
  Form,
  Input,
} from 'semantic-ui-react'


function NewQuiz() {
    const {trainingItem, setTrainingItem, cardId, setCardId} = useContext(TrainingContext);

    const defaultQuiz = {    
        question:"",
        correct_answer:"",
        option_2:"",
        option_3:"",
        option_4:"",
        training_id: cardId
      }

      const[quizData, setQuizData] = useState(defaultQuiz)

      function handleChange(e){
        const key = e.target.name
        setQuizData({
          ...quizData,
          [key]:e.target.value
        })
        }

        function handleSubmit(e){
            e.preventDefault();
            fetch("/newquiz",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(quizData)
            })
            .then((response) => response.json())
            .then((item) => console.log(item))
            .then(() => setQuizData(defaultQuiz))
            e.target.reset()
        }


    return (
        <>
            <h3>New Quiz</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Field
                    name="question"
                    control={Input}
                    value={quizData.question}
                    label='Question'
                    placeholder='Question'
                    onChange={handleChange}
                    />
                    <Form.Field
                    control={Input}
                    name="correct_answer"
                    value={quizData.correct_answer}
                    label='Correct Answer'
                    placeholder='Correct Answer'
                    onChange={handleChange}
                    />
                    <Form.Field
                    control={Input}
                    name="option_2"
                    value={quizData.option_2}
                    label='Second option'
                    placeholder='Second Option'
                    onChange={handleChange}
                    />
                    <Form.Field
                    control={Input}
                    name="option_3"
                    value={quizData.option_3}
                    label='Third Option'
                    placeholder='Third Option'
                    onChange={handleChange}
                    />
                    <Form.Field
                    control={Input}
                    name="option_4"
                    value={quizData.option_4}
                    label='Fourth Option'
                    placeholder='Fourth Option'
                    onChange={handleChange}
                    />
                </Form.Group>

                <Form.Field type="submit" control={Button}>Create Quiz</Form.Field>
            </Form>
        </>
      )
}

export default NewQuiz;