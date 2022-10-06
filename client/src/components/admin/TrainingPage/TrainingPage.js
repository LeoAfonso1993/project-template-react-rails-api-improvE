import { useContext } from "react";
import { TrainingContext } from "../../../contexts/TrainingContext";
import { Button, Form ,Select } from 'semantic-ui-react'
import NewQuiz from "../NewQuiz/NewQuiz";
import NewText from "../NewText/NewText";
import NewVideo from "../NewVideo/NewVideo";
import NewPicture from "../NewPicture/NewPicture";

const options = [
    { key: 'qz', text: 'Quiz', value: 'quiz' },
    { key: 't', text: 'Text', value: 'text' },
    { key: 'p', text: 'Picture', value: 'picture' },
    { key: 'v', text: 'Video', value: 'video' }
  ]

function TrainingPage() {
    const {trainingItem, setTrainingItem, cardId, setCardId} = useContext(TrainingContext);


    const handleChange = (e, { value }) => setTrainingItem(value)

    function itemsMenu(cb){
        if (cb === "quiz"){
            return <NewQuiz />
        }else if (cb === "text") {
            return <NewText /> 
        } else if (cb === 'picture') {
            return <NewPicture />
        } else if (cb === 'video') {
            return <NewVideo />
        }
    }

    return(
        <>
            <h1>{cardId}</h1>
            <Form>
                 <Form.Group widths='equal'>

                    <Form.Field
                    control={Select}
                    label='Type'
                    options={options}
                    placeholder='item'
                    onChange={handleChange}
                    />
                </Form.Group>
    
            </Form>
            <h2>{itemsMenu(trainingItem)}</h2>
        </>
    )
    
}

export default TrainingPage;