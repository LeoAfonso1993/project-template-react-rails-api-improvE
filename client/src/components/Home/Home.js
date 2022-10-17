import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { TrainingContext } from '../../contexts/TrainingContext';
import { Button, Form, Grid, Header, Image, Container, Segment } from 'semantic-ui-react'


function Home() {
    const navigate = useNavigate();
    const {counter, setCounter} = useContext(TrainingContext)

    function handleClick(){
        //setCounter(counter + 1)
        return navigate("/login")         
    }
 
    return (
        <>
            <Container style={{heigh: "100vh"}}>
                <h1 style={{color: 'white'}}>Welcome to ImprovE Training</h1>
                <h3 style={{color: 'white'}}>Please Select Your Account Type</h3>
                <Button type="button" onClick={handleClick}>Admin</Button>
                <Button type="button" onClick={handleClick}>Employee</Button>
            </Container>
        </>
    )
}

export default Home;