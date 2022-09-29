import { useContext } from 'react';
import { TrainingContext} from '../../../contexts/TrainingContext';
import { Row, Col, Container } from 'react-bootstrap';
import TrainingCards from '../TrainingCards/TrainingCards';

function TrainingContainer() {
    const {allTrainings, counter, setCounter} = useContext(TrainingContext);

    const tCards = allTrainings.map((training) => {
        return(
            <Col>
                <TrainingCards 
                key={training.name}
                id={training.id}
                name={training.name}
                categ={training.category_id}
                />
            </Col>
        )
    })

    return(
        <>
            <Container>
                <h1>Training Cards</h1>
                <Row xs={1} sm={2} md={3} className="g-4">
                    {tCards}
                </Row>
            </Container>
        </>
    )
    
}

export default TrainingContainer;