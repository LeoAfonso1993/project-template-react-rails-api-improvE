import { useContext } from "react";
import { TrainingContext } from "../../../contexts/TrainingContext";
import { Form ,Select } from 'semantic-ui-react'
import NewQuiz from "../NewQuiz/NewQuiz";
import NewText from "../NewText/NewText";
import NewVideo from "../NewVideo/NewVideo";
import PictureContainer from "../PictureContainer/PictureContainer";
import { Row, Col, Container } from 'react-bootstrap';
import ItemQuiz from "../ItemQuiz/ItemQuiz";
import ItemText from "../ItemText/ItemText";
import ItemVideo from "../ItemVideo/ItemVideo";
import ItemPicture from "../ItemPicture/ItemPicture";



const options = [
    { key: 'qz', text: 'Quiz', value: 'quiz' },
    { key: 't', text: 'Text', value: 'text' },
    { key: 'p', text: 'Picture', value: 'picture' },
    { key: 'v', text: 'Video', value: 'video' }
  ]

function TrainingPage() {
    const {trainingItem, setTrainingItem, cardId, quizList, textList, videoList, getTrainingQuizzes, getTrainingTexts, getTrainingVideos, pictureList, getTrainingPictures} = useContext(TrainingContext);

    const handleChange = (e, { value }) => setTrainingItem(value)

    function itemsMenu(cb){
        if (cb === "quiz"){
            return <NewQuiz />
        }else if (cb === "text") {
            return <NewText /> 
        } else if (cb === 'picture') {
            return <PictureContainer />
        } else if (cb === 'video') {
            return <NewVideo />
        }
    }

    function handleClick() {
        getTrainingQuizzes(cardId)
        getTrainingTexts(cardId)
        getTrainingVideos(cardId)
        getTrainingPictures(cardId)
    }

    const quizContent = quizList.map((item) => {
        return (
            <Col>
            <ItemQuiz
                key={item.question}
                id={item.id}
                name={item.question}
                answer={item.correct_answer}
                date={item.created_at}
            />
        </Col>
        )
    })

    const textContent = textList.map((item) => {
        return (
            <Col>
            <ItemText
                key={item.title}
                id={item.id}
                name={item.title}
                answer={item.description}
                date={item.created_at}
            />
        </Col>
        )
    })

    const videoContent = videoList.map((item) => {
        return (
            <Col>
            <ItemVideo
                key={item.title}
                id={item.id}
                name={item.title}
                answer={item.url}
                date={item.created_at}
            />
        </Col>
        )
    })

    const pictureContent = pictureList.map((item) => {
        return (
            <Col>
            <ItemPicture
                key={item.title}
                id={item.id}
                name={item.title}
                answer={item.url}
                date={item.created_at}
            />
        </Col>
        )
    })


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

            <button onClick={handleClick}>Load Content</button>
            <Container>
                <h3>Quizzes</h3>
                <Row xs={1} sm={1} md={1} className="g-4">
                    {quizContent}
                </Row>
            </Container>

            <br/>

            <Container>
                <h3>Texts</h3>
                <Row xs={1} sm={1} md={1} className="g-4">
                    {textContent}
                </Row>
            </Container>

            <br/>

            <Container>
                <h3>Videos</h3>
                <Row xs={1} sm={1} md={1} className="g-4">
                    {videoContent}
                </Row>
            </Container>

            <br/>

            <Container>
                <h3>Pictures</h3>
                <Row xs={1} sm={1} md={1} className="g-4">
                    {pictureContent}
                </Row>
            </Container>

        </>
    )
    
}

export default TrainingPage;